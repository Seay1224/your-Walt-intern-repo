# Docker Setup and Basics

## Goal
Install Docker and learn basic commands to manage containers.

## Reflection

### 1. What is the difference between `docker run` and `docker-compose up`?
* **`docker run`:** Used to start a **single** container manually from the command line. You have to type out all the flags (ports, volumes, env vars) every time.
* **`docker-compose up`:** Used to start **multiple** containers defined in a `docker-compose.yml` file. It's reproducible infrastructure-as-code. You just run one command, and it sets up networks, volumes, and services exactly as defined.

### 2. How does Docker Compose help when working with multiple services?
Focus Bear needs a Backend (NestJS), a Database (Postgres), and a Cache (Redis).
Without Compose, I would need 3 terminal windows and 3 long commands.
With Compose, I define them all in one file and run `docker-compose up`. They automatically share a network and can talk to each other by name (e.g., the backend connects to `db:5432`).

### 3. What commands can you use to check logs from a running container?
* `docker logs <container_id>`: Snapshots the logs.
* `docker logs -f <container_id>`: Follows the logs in real-time (like tailing a file).
* `docker-compose logs -f`: Follows logs for *all* services defined in the compose file at once.

### 4. What happens when you restart a container? Does data persist?
* **Process:** The process inside the container stops and starts again.
* **Data:**
  * **Ephemeral Data:** Files created inside the container layer are preserved on *restart*, but lost if you *remove* (`docker rm`) the container.
  * **Persisted Data:** If you use **Volumes**, data is safe even if you remove the container.

## Evidence
* Validated installation with `docker run hello-world`.
* Spun up the Postgres service using `docker-compose up -d`.
* Verified running containers with `docker ps`.