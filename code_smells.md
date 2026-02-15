# Identifying & Fixing Code Smells

## Reflections

### 1. What code smells did you find?
I created a file `code_smells.js` that contained:
* **Magic Numbers:** Used `1` and `0.9` without explanation.
* **Long Function:** The `handle` method did validation, calculation, and emailing all at once.
* **Duplicate Code:** The discount calculation (`u.bal * 0.9`) was repeated twice.
* **Large Class:** `UserHandler` was also handling email logic.
* **Deeply Nested Conditionals:** 3 levels of `if` statements making it hard to read.
* **Inconsistent Naming:** Used `u`, `d`, `em` instead of `user`, `discount`, `email`.
* **Commented-Out Code:** Leftover debug code (`// console.log`).

### 2. How did refactoring improve readability and maintainability?
* **Constants:** `ROLES.ADMIN` is much easier to understand than `1`.
* **Guard Clauses:** Removing the nested `if`s makes the flow linear and easy to follow.
* **Extraction:** Moving email logic to `EmailService` means if I want to change how emails are sent, I don't touch the `UserHandler` (Separation of Concerns).

### 3. How can avoiding code smells make future debugging easier?
If there is a bug in the discount logic, I now only have to fix it in **one place** (`applyDiscount` method) instead of hunting down every copy-pasted instance. Clear variable names also mean I don't have to guess what `d` stands for.

