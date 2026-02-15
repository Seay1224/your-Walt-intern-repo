# What is Docker and Why Use It?

## Goal

Understand what Docker is, how it differs from traditional Virtual Machines (VMs), and why it is essential for modern backend development.

## Reflection

### 1. How does Docker differ from a virtual machine?

* **Architecture:**
  * **VMs** include a full copy of an operating system (Guest OS), the application, and all dependencies. They sit on top of a Hypervisor.
  * **Docker Containers** share the host system's kernel and only package the application and its dependencies. They sit on top of the Docker Engine.
* **Performance:** Containers are lightweight and start in seconds, whereas VMs take minutes to boot up and consume significant system resources (RAM/CPU).
* **Size:** Container images are typically megabytes (MB), while VM snapshots are gigabytes (GB).

### 2. Why is containerization useful for a backend like Focus Bear’s?

* **Consistency:** It eliminates the "it works on my machine" problem. The backend (NestJS) runs exactly the same way on my laptop as it does on the production server.
* **Isolation:** The backend service (API) doesn't interfere with the database service (Postgres). They have their own clean environments.
* **Onboarding:** New developers don't need to install Node.js, Postgres, or Redis manually. They just run `docker-compose up`.

### 3. How do containers help with dependency management?

* **Explicit Definitions:** All dependencies and their exact versions are listed in a `Dockerfile` (e.g., `FROM node:18-alpine`).
* **No Conflicts:** I can run a project requiring Node 14 and another requiring Node 18 on the same machine without them fighting, because they live in separate containers.

### 4. What are the potential downsides of using Docker?

* **Complexity:** It adds a layer of abstraction that can be hard to debug (e.g., networking issues between containers).
* **Data Persistence:** If you forget to configure Volumes, you lose all your data when a container stops.
* **Security:** Since containers share the host kernel, if the kernel has a vulnerability, all containers might be at risk (though this is rare).

## Evidence

I have researched the Docker architecture and understood the key differences between Containerization and Virtualization. I created this document to summarize my findings.
