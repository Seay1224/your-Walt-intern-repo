# Milestone 2: Browser Extensions for Development

**Name:** Walt
**Role:** Backend Intern
**Date:** 2026-01-20

---

##  Installed Extensions & Rationale

I have installed the following Chrome extensions to enhance my development workflow:

### 1. JSON Viewer (JSON Formatter)
* **Why:** As a backend developer, this is my most used tool. Raw JSON data returned from an API endpoint is hard to read. This extension automatically formats it with syntax highlighting and collapsible trees, making it instantly readable.

### 2. React Developer Tools
* **Why:** To inspect the frontend component hierarchy. Even though I focus on the backend, I need to understand how the Focus Bear frontend (React) consumes my APIs and where data might be missing in the props.

### 3. Redux DevTools
* **Why:** To debug state management. It helps me see the exact data payload (Action) that the frontend is sending to my backend, which is critical for debugging "Bad Request" errors.

### 4. Lighthouse
* **Why:** To audit web performance. It helps me understand if my backend API responses are too slow and affecting the "Time to Interactive" score of the web app.

---

##  Reflection

### What was the most useful thing you learned?
The most useful takeaway is the importance of **JSON Viewer** for API development.
Before using it, checking a `GET /users` endpoint in the browser resulted in a wall of unreadable black-and-white text. With the extension, I can quickly verify if my NestJS DTOs are correctly serializing data and if relationships (e.g., user -> tasks) are loading correctly without needing to open Postman for every simple check.