# Company Policies: AI Usage Guidelines

**Name:** Walt
**Role:** Backend Intern
**Date:** 2026-01-16

---

## Research & Learn

### 1. What AI tools are typically used for your role?

As a Backend Intern working with NestJS and TypeScript, the typical tools are:

- **ChatGPT / Claude:** Used for explaining complex error logs, generating boilerplate code (like DTOs or Entities), and brainstorming implementation logic.
- **GitHub Copilot:** Used inside VS Code for intelligent code completion and writing unit tests faster.

### 2. What are the benefits and risks of using AI in a professional setting?

- **Benefits:** It significantly increases productivity by handling repetitive tasks (like writing Regex or SQL queries) and acts as a "24/7 Pair Programmer" for debugging.
- **Risks:**
  - **Hallucinations:** AI can confidently invent libraries or methods that don't exist (e.g., using deprecated NestJS syntax).
  - **Over-reliance:** relying too much on AI can lead to a lack of deep understanding of the codebase.
  - **Data Leakage:** Pasting sensitive code into public AI chats trains their models on our private data.

### 3. What types of information should never be entered into AI tools?

- **Secrets:** Never enter API Keys, Database Passwords, AWS Credentials, or Encryption Keys.
- **PII (Personally Identifiable Information):** Never enter real user names, emails, phone numbers, or addresses from the production database.
- **Proprietary Logic:** Never enter core business algorithms that give Focus Bear its competitive advantage.

### 4. How can you fact-check and validate AI-generated content to ensure accuracy?

- **Run the Code:** Never assume it works. Always compile and run it locally.
- **Check Documentation:** Verify imports and method names against the official documentation (e.g., NestJS docs) to ensure the AI isn't using outdated versions.
- **Code Review:** Read through the logic line-by-line to ensure it does exactly what is required and doesn't introduce hidden bugs or security holes.

---

## Reflection

### 1. When should you use AI for assistance, and when should you rely on your own skills?

- **Use AI:** When I need to recall syntax, generate test data, write generic utility functions, or need a "rubber duck" to explain a bug to.
- **Use Own Skills:** When making architectural decisions, understanding the specific _business context_ of Focus Bear, and during code reviews. I cannot blame AI if I commit code I don't understand.

### 2. How can you avoid over-reliance on AI while still benefiting from it?

I will use the **"15-Minute Rule."** Before asking AI, I will try to solve the problem myself or read the docs for 15 minutes. When I do use AI, I will force myself to read and understand every line of code it generates before pasting it, treating the AI as a Junior Assistant, not a Senior Architect.

### 3. What steps will you take to ensure data privacy when using AI tools?

I will practice **"Data Sanitization."** Before copying any code into ChatGPT, I will manually remove or replace sensitive info with placeholders.

- _Bad:_ "Fix this error for user `john@focusbear.io` with password `12345`."
- _Good:_ "Fix this error for a generic user object with placeholder credentials."

---

## Task: AI Experiment & Best Practice

### 1. Identify one task you can improve using an AI tool, and try it out.

**Task:** Create a NestJS DTO (Data Transfer Object) for a "User Profile Update" feature with validation.
**Prompt Used:** "Create a specific UpdateUserProfileDto in NestJS. It should allow optional updates for 'bio' (string, max 500 chars) and 'website' (must be a valid URL)."

### 2. Review the AI-generated output critically—did it require editing or fact-checking?

**Critique:**

- **The Good:** It correctly used `PartialType` and `IsString`.
- **The Bad:** It imported `IsUrl` from `class-validator` but forgot to add the `@ApiProperty()` decorators which are required for our Swagger documentation.
- **Result:** It required editing. I had to manually add the Swagger decorators to make the code compliant with our project standards.

### 3. Document one best practice you will follow when using AI tools at Focus Bear.

**Best Practice:** **"Sanitize before Prompting."**
**Description:** I will never copy-paste entire files blindly. I will strictly remove any hardcoded secrets, IP addresses, or internal project names from code snippets before asking AI for help to prevent data leakage.
