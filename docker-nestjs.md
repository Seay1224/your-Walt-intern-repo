# Containerizing NestJS with Docker

## Goal
To containerize a NestJS application and orchestrate it with PostgreSQL using Docker Compose.

## Reflection

### 1. How does a `Dockerfile` define a containerized NestJS application?
It acts as a blueprint. It specifies the base OS (Node Alpine), copies the source code into the image, installs dependencies via `npm install`, compiles the TypeScript code, and defines the startup command (`node dist/main`).

### 2. What is the purpose of a multi-stage build in Docker?
Optimization and Security.
* **Stage 1 (Build):** Installs heavy dev-dependencies (like TypeScript compiler) to build the app.
* **Stage 2 (Production):** Copies only the compiled JS files and runtime dependencies.
* **Result:** The final image is much smaller (lightweight) and safer because it doesn't contain source code or unnecessary tools.

### 3. How does Docker Compose simplify running multiple services together?
It allows defining the entire infrastructure (API + Database) in a single YAML file.
* It automatically creates a shared network so `api` can talk to `db`.
* It handles startup order with `depends_on`.
* It manages persistent storage with `volumes`.

### 4. How can you expose API logs and debug a running container?
* **Logs:** `docker-compose logs -f api` (View real-time logs).
* **Debug:** `docker exec -it <container_id> sh` (Enter the container shell to check files/network).

## Evidence
* Created a production-optimized `Dockerfile` using multi-stage builds.
* Configured `docker-compose.yml` to link NestJS and PostgreSQL.
* (Local execution skipped due to Windows Insider/Docker compatibility issues, code is verified standard configuration).