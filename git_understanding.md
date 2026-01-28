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


---

## 5. Advanced Git Commands

---

## 5. Advanced Git Commands (Reflections & Logs)

### `git checkout main -- <file>`
* **What it does:** It forcefully restores a specific file to the state it is in on the `main` branch, discarding any local changes.
* **Real-world use:** "Emergency Reset." When I've messed up a configuration file while testing and just want to get back to the clean version from production without resetting my entire workspace.
* **My Experiment Log:**
    I modified `learning_goals.md` and then restored it using this command.
    ```bash
    # Restoring the file from main
    $ git checkout main -- learning_goals.md
    
    # Result: The file immediately reverted to its original state.
    ```

### `git cherry-pick <commit>`
* **What it does:** It copies a specific commit from one branch and applies it to the current branch.
* **Real-world use:**
    * **Hotfixes:** Moving a bug fix from a development branch to a release branch.
    * **Correction:** When I accidentally committed to `main` (like in my experiment below) and needed to move that specific commit to my feature branch.
* **My Experiment Log:**
    I accidentally made a commit on `main`, so I switched to my branch and cherry-picked it over.
    ```bash
    # Step 1: I found the commit hash on main
    $ git log -1
    commit 013fc2018647191e639e242b2cde79cfb8ca31b2 (HEAD -> main)
    feat: add cherry emoji

    # Step 2: I switched to my feature branch
    $ git checkout docs/git-advanced-commands

    # Step 3: I picked that specific commit
    $ git cherry-pick 013fc2018647191e639e242b2cde79cfb8ca31b2
    [docs/git-advanced-commands d05a822] feat: add cherry emoji
     Date: Wed Jan 28 14:50:08 2026 +1100
     1 file changed, 2 insertions(+), 1 deletion(-)
    ```

### `git log` & `git blame`
* **What they do:** `log` shows history; `blame` shows who wrote each line.
* **Real-world use:**
    * **Context:** I used `git log` to find the hash `013fc20` needed for the cherry-pick above.
    * **Accountability:** `git blame` is useful in large teams to find out who to ask questions about a specific piece of code (e.g., "Why was this variable added here?").


### `git checkout main -- <file>`
* **What it does:** It restores a specific file to the state it is in on the `main` branch. It effectively discards any local changes or commits made to that file on the current branch.
* **Real-world use:** When I accidentally break a configuration file or delete a critical function while experimenting, and I just want to "reset" that specific file back to a known working state without resetting my entire project.

### `git cherry-pick <commit>`
* **What it does:** It takes a single specific commit from another branch and applies it to the current branch, creating a new copy of that commit.
* **Real-world use:**
    * **Hotfixes:** When a bug is fixed in a development branch, but that specific fix needs to be deployed to production immediately without merging the unfinished features from the dev branch.
    * **Recovering work:** If I accidentally committed to the wrong branch, I can switch to the correct branch and cherry-pick the commit over.

### `git log`
* **What it does:** It displays the chronological history of commits.
* **Real-world use:**
    * **Finding Context:** To understand "why" a change was made by reading past commit messages.
    * **Finding Hash IDs:** To find the specific commit hash needed for a `cherry-pick` or `git revert`.

### `git blame <file>`
* **What it does:** It shows the author and timestamp for the last modification of every single line in a file.
* **Real-world use:**
    * **Context Hunting:** It's not just for blaming people! It's mostly used to find out *who* wrote a complex piece of logic so I can ask them questions about it.
    * **Debugging:** To see if a recent change (e.g., "Edited 2 hours ago") corresponds to when a bug started appearing.



