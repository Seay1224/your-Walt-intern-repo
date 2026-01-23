#### Git Staging vs. Committing

**Name:** Walt
**Role:** Backend Intern
**Date:** 2026-01-20

---

## 1. What is the difference between staging and committing?
* **Staging (`git add`):** This is like packing items into a box. You pick specific changes (files or lines) you want to include in the next snapshot. The changes are in the "Staging Area" (or Index), ready to be saved, but not yet permanent.
* **Committing (`git commit`):** This is like sealing the box and putting a label on it. It takes everything currently in the Staging Area and saves it as a permanent snapshot in the project's history with a message explaining what happened.

## 2. Why does Git separate these two steps?
Git separates them to give developers **control and granularity**.
* **Selective Commits:** If I modified 3 files (A, B, and C), but A and B are for a bug fix and C is for a new feature, I can stage A and B first and commit them separately from C.
* **Review Buffer:** It acts as a final "Are you sure?" check. Before committing, I can review exactly what is staged to ensure I didn't leave in any `console.log` or debug code.

## 3. When would you want to stage changes without committing?
* **Partial Updates:** When I have done a lot of work on a file but only want to commit a specific part of it (e.g., using `git add -p` to stage specific lines).
* **Context Switching:** When I need to switch branches but my work isn't finished yet. I might stage the good parts to keep them safe in the index before deciding whether to commit or stash them.


---

## 4. Branching & Collaboration

### Why is pushing directly to `main` problematic?
* **Risk of Breaking Production:** The `main` branch usually represents the "stable" version of the software. Pushing unverified code directly to it can introduce bugs that immediately affect all users.
* **No Code Review:** Direct pushes bypass the opportunity for teammates to check the code (Peer Review), leading to lower code quality and shared knowledge gaps.

### How do branches help with reviewing code?
* **Isolation:** Branches allow developers to work on features or fixes in isolation without disturbing the stable codebase.
* **Pull Requests (PRs):** A branch allows us to create a PR. This is a dedicated space where the team can discuss, critique, and improve the specific set of changes before they are merged into `main`.

### What happens if two people edit the same file on different branches?
* **Merge Conflict:** Git will stop and ask for help. It cannot automatically decide which version is correct. The developer performing the merge must manually resolve the conflict by choosing which code to keep (or combining both).