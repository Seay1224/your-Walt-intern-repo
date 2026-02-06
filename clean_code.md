# Clean Code Principles

## 1. Core Principles

### Simplicity (KISS - Keep It Simple, Stupid)

- **Concept:** Avoid unnecessary complexity. The best code is the code that doesn't need to be written.
- **Why it matters:** Complex code is harder to test, harder to debug, and has more hiding spots for bugs.

### Readability

- **Concept:** Code is read 10x more often than it is written. Variable names should be descriptive, and logic should flow naturally.
- **Why it matters:** If a new teammate (or future you) looks at the code and asks "What does this do?", the code has failed.

### Maintainability

- **Concept:** Writing code that is easy to modify and extend later without breaking existing functionality.
- **Why it matters:** Software is never "finished". It changes constantly. Maintainable code saves hours of refactoring time later.

### Consistency

- **Concept:** Following a uniform style (e.g., naming conventions, indentation, file structure) throughout the project.
- **Why it matters:** It reduces cognitive load. You don't have to guess if a function uses `camelCase` or `snake_case`; you just know.

### Efficiency

- **Concept:** Writing code that performs well, but avoiding "premature optimization" (optimizing before you know where the bottleneck is).
- **Why it matters:** We want fast applications, but not at the cost of making the code unreadable unless absolutely necessary.

---

## 2. Practical Example: Messy vs. Clean

### The Messy Code

**Critique:**

- **Bad Naming:** What is `d`? What is `t`? `calc` is too vague.
- **Magic Numbers:** What does `0.1` represent? A tax? A discount?
- **Formatting:** No spacing makes it hard to scan.

```javascript
// A function to calculate something important?
function calc(d, t) {
  let r = 0;
  if (t == "VIP") {
    r = d * 0.8;
  } else {
    r = d;
  }
  return r + r * 0.1;
}
```

### The Clean Code

```javascript
const TAX_RATE = 0.1;
const VIP_DISCOUNT_RATE = 0.2; // 20% off

function calculateFinalPrice(basePrice, userType) {
  let priceAfterDiscount = basePrice;

  // Apply discount for VIPs
  if (userType === "VIP") {
    priceAfterDiscount = basePrice * (1 - VIP_DISCOUNT_RATE);
  }

  // Add tax to get the final total
  const finalPrice = priceAfterDiscount * (1 + TAX_RATE);

  return finalPrice;
}
```


---

## 3. Code Formatting & Style Guides

### Why is code formatting important?
* **Cognitive Load:** When code looks consistent (same indentation, same quotes), my brain doesn't have to process the "shape" of the code and can focus on the "logic".
* **Git Diffs:** If everyone uses their own style, git commits will be full of useless "whitespace changes", making it hard to see what actually changed in the logic.
* **Professionalism:** Consistent code looks like it was written by a unified team, not 10 strangers.

### What issues did the linter/formatter detect?
* **Markdown Formatting:** Prettier automatically fixed the indentation in my lists and standardized the spacing around headers in my `.md` files.
* **Consistency:** It enforced single quotes `'` over double quotes `"` in my configuration files, ensuring a uniform look.

### Did formatting the code make it easier to read?
* **Yes!** Especially in large files. The automatic line wrapping (`printWidth`) prevents horizontal scrolling, and the consistent indentation makes the hierarchy of headings and lists immediately obvious.



---

## 4. Naming Variables & Functions

### What makes a good variable or function name?
* **Descriptive:** It should explain *what* the value is (e.g., `daysSinceCreation` instead of `d`).
* **Pronounceable:** You should be able to say it out loud (e.g., `customerList` instead of `custLst`).
* **Action-Oriented (for functions):** Functions do things, so they should start with a verb (e.g., `calculateTotal`, `fetchUserData`).
* **Boolean Conventions:** Variables that store true/false should sound like a question (e.g., `isValid`, `hasAccess`, `isLoading`).

### What issues can arise from poorly named variables?
* **Mental Mapping:** If I see `let x = 10`, I have to hold in my head that "x means max retries". This wastes brain power.
* **Misinterpretation:** A function named `check()` is dangerous. Does it just *check* something? Or does it *check and delete* invalid items? Ambiguity leads to bugs.

### Refactoring Example (Before vs. After)

** Bad Naming:**

```javascript
    // What does this do? Hard to guess.
    let l = [];
    function h(x) {
        if (x > 18) {
            l.push(x);
        }
    }
```

** Good Naming:**

```javascript
    // Clear intent without needing comments.
    const allowedAges = [];
    function addAdultUser(age) {
        if (age > 18) {
            allowedAges.push(age);
        }
    }
```
---

## 5. Writing Small, Focused Functions (Single Responsibility)

### Why is breaking down functions beneficial?
* **Testability:** It's easy to write a unit test for a small function like `calculateTax(price)` than a giant function that calculates tax, updates the database, and sends an email all at once.
* **Reusability:** Small functions can be used in multiple places. If `formatDate()` is its own function, I can use it everywhere, not just in one report.
* **Debugging:** If something breaks, a small function helps isolate the issue immediately.

### Refactoring Example: The "God Function" vs. Small Functions

**The "God Function" (Too Big):**
This function does TOO much: validates input, calculates logic, handles errors, and formats output.
```javascript
function processOrder(order) {
    // 1. Validation
    if (!order.id || !order.items || order.items.length === 0) {
        console.log("Invalid order");
        return;
    }
    
    // 2. Calculation
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    
    // 3. Formatting & Output
    console.log("Order ID: " + order.id);
    console.log("Total: $" + total.toFixed(2));
}
```
**Good Function:**
```javascript
// Function 1: Pure Validation
function isValidOrder(order) {
    return order.id && order.items && order.items.length > 0;
}

// Function 2: Pure Calculation
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Function 3: Coordinator (The Controller)
function processOrder(order) {
    if (!isValidOrder(order)) {
        console.log("Invalid order");
        return;
    }
    
    const total = calculateTotal(order.items);
    
    console.log(`Order ID: ${order.id}`);
    console.log(`Total: $${total.toFixed(2)}`);
}
```

---

---

## 6. Avoiding Code Duplication (DRY Principle)

### Reflection
* **What were the issues with duplicated code?**
  Duplicated code creates a maintenance trap. If logic (like a calculation or formatting rule) is copied in multiple places, changing it requires finding and updating every single copy. Missing just one copy leads to inconsistent behavior and bugs.
* **How did refactoring improve maintainability?**
  By extracting the repeated logic into a single function (the "Single Source of Truth"), I only need to update the code in one place if requirements change. This makes the codebase smaller, easier to read, and less prone to errors.

### Refactoring Example

**Bad (Duplicated Code):**
We are formatting user names in two different places manually.
```javascript
function showUserProfile(user) {
    // Duplicated logic: manual formatting
    const fullName = user.firstName + " " + user.lastName;
    console.log("Profile: " + fullName);
}

function sendEmail(user) {
    // Duplicated logic: manual formatting again
    const fullName = user.firstName + " " + user.lastName;
    console.log("Sending email to " + fullName);
}
```
**Good:**

```javascript

function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function showUserProfile(user) {
    console.log(`Profile: ${getFullName(user)}`);
}

function sendEmail(user) {
    console.log(`Sending email to ${getFullName(user)}`);
}
```


---

## 7. Refactoring Code for Simplicity (KISS Principle)

### Reflection
* **What made the original code complex?**
  The original code suffered from "Arrow Code" issues—deeply nested `if/else` statements that made it hard to track the logic flow. I had to keep multiple conditions in my head to understand when the function would return.
* **How did refactoring improve it?**
  By using **Guard Clauses** (returning early), I removed the nesting completely. The code now reads like a linear list of checks. If a check fails, the function exits immediately. This makes the "happy path" (the main logic) much clearer and easier to modify.

### Refactoring Example: Replacing Nested Conditionals with Guard Clauses

**Bad (Deeply Nested / Arrow Code):**
Hard to read and easy to break when adding new logic.
```javascript
function getDiscount(user) {
    if (user) {
        if (user.isMember) {
            if (user.hasCoupon) {
                return 20; // Both member and coupon
            } else {
                return 10; // Member only
            }
        } else {
            return 0; // Not a member
        }
    } else {
        throw new Error("User required");
    }
}
```
**Good:**
```javascript
function getDiscount(user) {
    if (!user) throw new Error("User required");
    if (!user.isMember) return 0;
    
    // If we are here, we know user exists and is a member
    if (user.hasCoupon) return 20;
    
    return 10;
}
```





---

## 8. Comments and Documentation

### Reflection
* **When should you add comments?**
  Comments should explain the **"Why"**, not the "What". Use them to explain complex logic (like Regex), specific business rules, or why a strange workaround/hack was necessary.
* **When should you avoid comments and instead improve the code?**
  If a comment is explaining *what* a variable does (e.g., `// days in a week`), you should delete the comment and rename the variable instead (e.g., `const DAYS_IN_WEEK = 7`). Code should be "Self-Documenting".

**Before (Noise Comments):**
```javascript
// Set d to 86400
const d = 86400; 

// check if u is 18
function check(u) {
    return u.a >= 18;
}
```

**Rewrite (Clean Version)：**
```JavaScript
// Renamed variable, so no comment is needed
const SECONDS_IN_A_DAY = 86400;

// Renamed function and arguments to be clear
function isUserAdult(user) {
    return user.age >= 18;
}
```


---

## 9. Handling Errors and Edge Cases

### Reflection
* **What was the issue with the original code?**
  The original function assumed all inputs were perfect. It allowed negative prices (logic error) and non-number strings (runtime error/NaN), which could corrupt database data or crash the UI.
* **How does handling errors improve reliability?**
  By using **Guard Clauses** to fail fast (throw error immediately), we prevent "garbage data" from flowing deeper into the system. The application becomes predictable: it either works correctly or tells you exactly why it failed.

**Before (Unsafe):**
```Javascript
function calculateDiscount(price, discount) {
    // Allows negative discount (-50) which increases price!
    // Allows strings ("apple") which results in NaN.
    return price - (price * (discount / 100));
}
```

**After (Robust with Guard Clauses):** 
```Javascript
function calculateDiscount(price, discount) {
    if (typeof price !== "number") throw new Error("Price must be a number");
    if (price < 0) throw new Error("Price cannot be negative");
    if (discount < 0 || discount > 100) throw new Error("Discount invalid");

    return price - (price * (discount / 100));
}


---

## 10. Unit Testing (Jest)

### Reflection
* **How do unit tests help keep code clean?**
  Unit tests act as a "safety net". They allow me to refactor code (change the structure) confidently because if I break something, the test will fail immediately. They also serve as "live documentation" showing exactly how a function is supposed to act.
* **What issues did you find while testing?**
  While writing the test for `divide`, I realized I needed to verify what happens when dividing by zero. This forced me to ensure my original code actually handled that edge case correctly.

### Evidence of Testing
I installed **Jest** and created a test suite for `math_utils.js`.

**Test File (`math_utils.test.js`):**
```javascript
const { add, divide } = require('./math_utils');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});