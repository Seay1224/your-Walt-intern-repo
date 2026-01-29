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
* **What they do:** `log` shows the chronological history; `blame` shows the author and timestamp for every single line in a file.
* **Real-world use:**
    * **Context:** I used `git log` to find the hash `013fc20` needed for the cherry-pick above.
    * **Accountability & Debugging:** `git blame` is useful to find out *who* wrote a complex piece of logic so I can ask them questions, or to check if a recent change corresponds to when a bug started appearing.



---

## 7. Pull Request & Workflow Reflection

### Why are PRs important?
* **Quality Gate:** PRs allow the team to review code before it touches `main`, preventing bugs from breaking production.
* **Knowledge Transfer:** It allows junior developers to learn from senior feedback during the review process.
* **Documentation:** The PR discussion serves as a permanent history of *why* a change was made.

### My PR Workflow Evidence
I successfully created a feature branch, pushed it, merged it via GitHub, and cleaned up my local environment.

**Terminal Log Proof:**
    ```text
    # 1. Pushing the feature branch
    $ git push -u origin docs/pr-workflow
    remote: Create a pull request for 'docs/pr-workflow' on GitHub...
    To [https://github.com/Seay1224/your-Walt-intern-repo.git](https://github.com/Seay1224/your-Walt-intern-repo.git)

    # 2. Switching to main and pulling the merged code
    $ git checkout main
    $ git pull
    Updating 013fc20..9dcd83c
    Fast-forward
    git_understanding.md | 51 +++++++++++++++++++++++++++++++++++++++++++++++++++-
    1 file changed, 51 insertions(+), 1 deletion(-)

    # 3. Deleting the feature branch (Cleanup)
    $ git branch -d docs/pr-workflow
    Deleted branch docs/pr-workflow (was 8bffbcc).













---


## 8. Commit Message Best Practices

### Experiment Reflection
I created three commits to test different styles:
1.  **Vague:** "fixed stuff" - Looking back at the log, I have no idea *what* was fixed.
2.  **Overly Detailed:** "I decided to add..." - The title was cut off in GitHub's UI, and it was too hard to scan quickly.
3.  **Structured:** "test: add temporary..." - Instantly tells me the **type** of change and the **intent**.

### What makes a good commit message?
* **Structure:** It should follow a standard like **Conventional Commits**: `<type>(<scope>): <subject>`.
    * Types: `feat` (new feature), `fix` (bug fix), `docs` (documentation), `chore` (maintenance).
* **Imperative Mood:** Use "Add" instead of "Added". (e.g., "Add user login" behaves like a command).
* **Concise:** The subject line should be under 50 characters.

### How does a clear commit message help in team collaboration?
* **Changelogs:** Good messages allow tools to automatically generate "What's New" release notes.
* **Reviewing:** It helps the reviewer understand the *context* ("Why did they do this?") before looking at the code.

### How can poor commit messages cause issues later?
* **Bisecting Nightmares:** If I use `git bisect` and land on a commit named "update", I won't know if that commit was supposed to touch the database or the UI.
* **Lost History:** If a bug appears 6 months later, seeing "fixed bug" doesn't tell us if *this* specific bug was previously addressed.