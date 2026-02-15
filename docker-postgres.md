# Running PostgreSQL in Docker

## Goal

Set up and run a PostgreSQL database in Docker for local development.

## Reflection

### 1. What are the benefits of running PostgreSQL in a Docker container?

* **Consistency:** Everyone on the team uses the exact same version of Postgres (defined in `docker-compose.yml`). No "it works on my machine" issues.
* **Isolation:** It doesn't clutter my local OS. I can delete the container, and my machine is clean again.
* **Speed:** I can spin up a fresh database in seconds with one command (`docker-compose up`).

### 2. How do Docker volumes help persist PostgreSQL data?

By default, data inside a container is lost if the container is deleted.
**Docker Volumes** solve this by mapping a folder inside the container (`/var/lib/postgresql/data`) to a storage area on my host machine.

* Even if I run `docker-compose down` (delete containers), the volume `db_data` remains.
* When I restart, Docker re-attaches the volume, and my data is still there.

### 3. How can you connect to a running PostgreSQL container?

I can connect using any database client (like **pgAdmin**, **DBeaver**, or **TablePlus**):

* **Host:** `localhost`
* **Port:** `5432` (mapped in compose file)
* **User:** `focus_user`
* **Password:** `focus_password`
* **Database:** `focus_db`

## Evidence

I created a `docker-compose.yml` file to orchestrate the database service.

* **Service:** PostgreSQL 15 (Alpine version for smaller size).
* **Persistence:** Configured a named volume `db_data` to ensure data safety.
* **Access:** Exposed port `5432` to the host machine.
