# Company Policies: Cyber Security

**Name:** Walt
**Role:** Backend Intern
**Date:** 2026-01-15

---

##  Research & Learn

### 1. What are common cyber security threats in a remote work environment?
* **Phishing Attacks:** Attackers pretending to be colleagues or software providers (like GitHub/AWS) to steal credentials.
* **Unsecured Wi-Fi:** Working from cafes using public Wi-Fi can expose traffic to interception (Man-in-the-Middle attacks) if a VPN is not used.
* **Home Network Vulnerabilities:** Using default router passwords or outdated firmware at home makes the network an easy target.

### 2. What are best practices for keeping your devices and accounts secure?
* **Software Updates:** Regularly updating the OS and IDE patches security holes.
* **Encryption:** Ensuring the laptop’s hard drive is encrypted (e.g., BitLocker or FileVault) so data is safe if the device is stolen.
* **Principle of Least Privilege:** Only requesting access to the data/servers I strictly need for my current task.

### 3. Why is it important to lock your computer when away from your desk?
Locking the computer prevents unauthorized physical access. Even at home or a co-working space, leaving a screen unlocked allows anyone (a roommate, a guest, or a thief) to access sensitive company data or install malicious software in seconds.

### 4. How should you handle phishing attempts and suspicious links?
* **Verify the Sender:** Check the actual email address, not just the display name.
* **Hover, Don't Click:** Hover over links to see the real URL.
* **Report:** If an email looks suspicious (e.g., urgent requests for money or passwords), do not interact with it. Report it to the security team or Jeremy immediately via a separate channel (like Discord).

### 5. What makes a strong password, and why should you use a password manager?
* **Strong Password:** It should be long (12+ characters), complex (mix of letters, numbers, symbols), and **unique** (never used on other sites).
* **Why Password Manager:** Humans are bad at remembering random strings. A password manager (like Bitwarden) generates and stores complex passwords for us, preventing the bad habit of password reuse.

### 6. Why is two-factor authentication (2FA) important, and when should you enable it?
* **Importance:** It adds a second layer of defense. Even if a hacker steals my password, they cannot log in without the physical device (phone) or code.
* **When to enable:** It should be enabled on **all** accounts that support it, especially critical ones like GitHub, AWS, Email, and Discord.

---

##  Reflection

### 1. What security measures do you currently follow, and where can you improve?
**Currently Follow:** I consistently lock my screen whenever I step away from my desk, and I always check the URL domain before logging into any service.
**Improvement Needed:** I have a bad habit of reusing variations of the same password for personal accounts. I need to stop this immediately to prevent "credential stuffing" attacks from affecting my work accounts.

### 2. How can you make secure behaviour a habit rather than an afterthought?
I will integrate security checks into my standard "Definition of Done." Just as I wouldn't push code without running tests, I will not finish a task without verifying that no secrets are exposed and 2FA is active. I will treat security as a daily discipline, not a one-time setup.

### 3. What steps will you take to ensure your passwords and accounts are secure?
I will take the following steps today:
1.  Install a Password Manager (like Bitwarden).
2.  Conduct an audit of my GitHub, Discord, and Email accounts to ensure 2FA is turned on.
3.  Replace all my old passwords with generated 20-character random strings.

### 4. What would you do if you suspected a security breach or suspicious activity on your account?
If I suspected a breach, I would:
1.  **Disconnect:** Immediately disconnect the affected device from the internet.
2.  **Secure:** Change my critical passwords using a *different*, uncompromised device.
3.  **Report:** Notify the Team Lead (Jeremy) immediately via Discord or phone so they can revoke my access tokens and check server logs.

---

##  Task: Security Setup Checklist

### 1. Work Accounts & 2FA
- [x] **GitHub:** 2FA enabled (Authenticator App).
- [x] **Discord:** 2FA enabled.
- [x] **Email:** Strong, unique password set.

### 2. Password Storage
- [x] **Password Manager:** I am using a password manager (e.g., Bitwarden/Google Password Manager) to generate and store unique passwords for Focus Bear accounts.

### 3. Device Auto-Lock
- [x] **Auto-lock Setting:** I have configured my computer to automatically require a password after **5 minutes** of inactivity.

### 4. New Cyber Security Habit
**Habit:** "Never commit secrets to Git."
**Description:** I will be extra careful not to hardcode API keys or passwords in my code. I will use `.env` files and ensure they are added to `.gitignore`.