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
