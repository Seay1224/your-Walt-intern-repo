# Static Analysis Checks in CI/CD

## Reflection

### 1. What is the purpose of CI/CD?
* **CI (Continuous Integration):** Automatically merging code changes from multiple developers into a shared repository frequently. It runs automated tests and linters to catch bugs early (Integration Hell prevention).
* **CD (Continuous Deployment/Delivery):** Automatically deploying the code to production (or staging) if all CI checks pass. It ensures the software is always in a releasable state.

### 2. How does automating style checks improve project quality?
It removes the need for humans to argue about "spaces vs tabs" or formatting during code reviews. The machine is the "bad cop," allowing humans to focus on logic and architecture. It also ensures no typo slips into the documentation.

### 3. What are some challenges with enforcing checks in CI/CD?
* **False Positives:** The linter might flag valid code/text as an error (e.g., a technical term flagged as a typo).
* **Slow Builds:** If checks take too long, developers get frustrated waiting for the green light.
* **"It works on my machine":** Sometimes CI environments differ from local setups.

### 4. Difference between Small vs. Large Teams?
* **Small Projects:** Simple pipelines (Lint -> Test -> Deploy).
* **Large Teams:** Complex pipelines with parallel jobs, end-to-end testing, security scanning, feature flags, and approval gates before deployment.

## Evidence
* **GitHub Action File:** Created `.github/workflows/ci.yml`.
* **Husky Hooks:** configured `.husky/pre-commit` to run linting before every commit.
* **Tools:** Added `markdownlint-cli` and `cspell` to `package.json`.