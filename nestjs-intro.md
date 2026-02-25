# Reflection: What is NestJS? (Framework Overview)

## 1. What are the key differences between NestJS and Express.js?
* **Architecture:** Express.js is a minimalist, unopinionated framework. It doesn't tell you how to structure your files, which often leads to messy codebases in large projects. NestJS, on the other hand, is highly opinionated. It provides a strict, out-of-the-box architecture inspired by Angular.
* **Under the Hood:** NestJS actually uses Express.js (by default) under the hood! It acts as a powerful wrapper that adds structure, TypeScript support, and advanced design patterns on top of Express.
* **Paradigm:** Express relies heavily on simple callback functions and middleware. NestJS embraces Object-Oriented Programming (OOP), Functional Programming (FP), and Dependency Injection (DI).

## 2. Why does NestJS use decorators extensively?
Decorators (like `@Controller()`, `@Get()`, or `@Injectable()`) are a TypeScript feature that allows developers to attach metadata to classes and methods. NestJS uses them extensively to keep the business logic clean. Instead of writing boilerplate code to define routes or register services, you simply add a decorator. The NestJS runtime reads this metadata and automatically handles the underlying routing and instantiation, making the code highly readable and declarative.

## 3. How does NestJS handle dependency injection?
NestJS has a built-in Inversion of Control (IoC) container. When you decorate a class with `@Injectable()`, you are telling the framework that this class can be managed by the container. When another class (like a Controller) needs that service, you simply declare it in the constructor: `constructor(private readonly tasksService: TasksService) {}`. NestJS automatically resolves the dependency, creates the instance, and injects it for you.



## 4. What benefits does modular architecture provide in a large-scale app?
In a large-scale application like Focus Bear, a monolithic codebase can quickly become unmaintainable. NestJS's modular architecture (using `@Module()`) forces developers to group related components (Controllers, Services, Repositories) into distinct feature boundaries (e.g., a User Module, a Task Module). 
This provides several benefits:
* **Separation of Concerns:** Different teams can work on different modules without merge conflicts.
* **Reusability:** Modules can be easily exported and reused in other parts of the app.
* **Scalability:** It makes it much easier to break down a large monolithic app into separate microservices later on if needed.