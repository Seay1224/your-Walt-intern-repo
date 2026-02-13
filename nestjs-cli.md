# Using NestJS CLI for Scaffolding

## Goal
To learn how to use the NestJS CLI to scaffold modules, controllers, and services efficiently.

## Reflection

### 1. How does the NestJS CLI help streamline development?
It automates the creation of boilerplate code. Instead of manually creating files, writing the class structure, and importing dependencies, one command (`nest g`) does it all in seconds. It allows developers to focus on business logic rather than setup.

### 2. What is the purpose of `nest generate`?
The `nest generate` (or `nest g`) command is used to create new building blocks for the application. It can generate:
* Modules (`nest g mo`)
* Controllers (`nest g co`)
* Services (`nest g s`)
* Full Resources (CRUD) (`nest g resource`)

### 3. How does using the CLI ensure consistency across the codebase?
* **Standard Naming:** It automatically follows naming conventions (e.g., `tasks.controller.ts`).
* **Standard Structure:** It places files in the correct folders and generates standard boilerplate code (Classes, Decorators).
* **Auto-Wiring:** It automatically updates the parent `module.ts` file, ensuring every new component is properly registered and available to the app.

### 4. What types of files and templates does the CLI create by default?
When generating a component (e.g., a Service), it typically creates:
1.  **`.ts` file:** The main code file (e.g., `tasks.service.ts`).
2.  **`.spec.ts` file:** A unit test file for that component.
3.  **Updates Module:** It modifies the relevant `.module.ts` file to include the new provider/controller.

## Evidence
* Generated a `TasksModule`, `TasksController`, and `TasksService` using the CLI (or manual simulation).
* Verified that the files were created in the `src/tasks` directory.