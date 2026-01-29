# Agile Workflows: Kanban

**Name:** Walt
**Role:** Backend Intern
**Date:** 15-01-2026

---

## Research & Learn

### 1. How a Kanban Board Works

A Kanban board is a visual project mannagement tool that maps out the workflow. I t works by turning invisible "knowledge work" into visible cards, allowing the team to track progress, spot bottlenecks, and optimize the flow of value from "To Do" to "Done".

### 2. The Columns

Columns represent the specific stages a task go through.

- **Not Started(Backlog):** The pool of tasks waiting to be picked up.
- **In Progress:** Tasks currently being coded.
- **Ready for Review:** Code has been pushed and a Pull Request (PR) is open for the team to look at.
- **Approved by Bot:** The code passed automated CI/CD checks (lintring, tests) and is ready for merge.

### 3. Task Movement & Responsibility

- **Movement:** Tasks move from left to right.
- **Responsibility:** The person assighned to the card(Me) is responsible for keeping its statys updated. If I finish the coding, its my job to move it to the next stages.

### 4.Benefits of Limiting Work In Progress(WIP)

Limiting WIP presents context switching. It forces the team to focus on **finishing**current work before **starting** new work, which can speed up overall delivery time(Cycle Time).

---

## Reflection

### 1. Managing Priorities & Avoiding Overload

Kanban helps avoid overload by making my capacity visible. If my "In Progress" column is full, we cant move a new card into it.

### 2.Inproving My Workflow

I can improve my workflow by strictly observing the colmns. Instead of coding on my own machine for days, I will push it to "Ready for Review" as early as possible to get feedback.

## Task

### 1. Board Created

I have set up a GitHub Project Board for this repository with the following status columns to match our workflow:

- `Not Started`
- `In Progress`
- `Ready for Review`
- `Approved by Bot` / `Done`

### 2. Tracking Improvement Strategy

**Action:** Automating Status Updates.
**Description:** I will use GitHub keywords (e.g., `Closes #IssueID`) in my Pull Request descriptions.
**Benefit:** This automatically moves linked issues to the "Done" column when the code is merged, reducing manual clicks and ensuring the board always reflects reality.
