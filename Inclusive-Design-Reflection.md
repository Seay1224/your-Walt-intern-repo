# Company Policies: Working with Vulnerable Populations

**Name:** Walt
**Role:** Backend Intern
**Date:** 2026-01-16

---

##  Research & Learn

### 1. Who are considered vulnerable populations in our context?
In the context of Focus Bear, vulnerable populations primarily include neurodivergent individuals (ADHD, Autism) and those struggling with mental health (anxiety, depression).
* **Challenges:** They often face "Executive Dysfunction"—difficulty starting tasks, organizing thoughts, or regulating emotions. In digital spaces, they are easily overwhelmed by clutter, loud notifications, or complex navigation.

### 2. Ethical considerations when designing for neurodiversity
* **No "Dark Patterns":** We must never exploit a user's impulsivity (common in ADHD) to make money (e.g., hard-to-cancel subscriptions).
* **Avoid Shame:** Productivity tools often "shame" users for breaking streaks. For our users, this causes anxiety. Our design must be forgiving and encouraging, not punitive.

### 3. Making content accessible for ADHD/Autism
* **Cognitive Load:** Keep interfaces clean. Too many buttons = paralysis.
* **Sensory Needs:** Support Dark Mode (to reduce eye strain) and avoid sudden loud sounds or flashing animations.
* **Predictability:** Buttons should always do what they say. Surprises are stressful.

### 4. Supporting neurodivergent team members
* **Communication:** Be explicit. Avoid idioms or "reading between the lines." Say exactly what is needed.
* **Flexibility:** Understand that energy levels might fluctuate. Asynchronous work allows people to work when their brain is most focused.

---

##  Reflection

### 1. Adjusting my communication style
I will strive to be **literal and structured** in my communication.
* Instead of: "Can you handle that thing we talked about?" (Vague, anxiety-inducing)
* I will use: "Can you update the API endpoint for User Login by Tuesday?" (Specific, clear)

### 2. Common Pitfalls to Avoid
* **Ambiguous Error Messages:** As a backend dev, returning a generic `500 Server Error` causes panic.
* **Improvement:** I should return descriptive errors like `{"message": "Password is too short, please try again"}` so the frontend can guide the user gently.

### 3. One Practical Change
I will review the text in my API responses. I will ensure they are helpful and neutral, avoiding technical jargon that might confuse or frustrate a non-technical user struggling with focus.

---

##  Task: First-Person Account & Practice

### 1. First-Person Account (Summary)
*Source: Common ADHD Community Discussions (Reddit/Twitter)*
**The Experience:** "I downloaded a productivity app to help me get organized. But it started sending me 10 notifications a day. Instead of helping, it felt like the app was nagging me. I got overwhelmed, felt guilty for ignoring it, and eventually deleted it."
**Takeaway:** Notifications must be helpful, not harassing. "Nagging" destroys trust.

### 2. Design Improvement for Focus Bear
**Idea:** "Forgiving Streaks."
**Detail:** If a user misses a day, don't show a broken red chain or a sad face. Allow them to "freeze" their streak or simply encourage them to start again. This prevents the "all-or-nothing" thinking that leads to quitting.

### 3. Hypothetical User Response
**Scenario:** A user writes in, frustrated: *"I can't get this app to work! I tried to set up a routine but it keeps crashing. I feel so stupid, I can't even use a simple timer app."*

**My Draft Response:**
> "Hi there,
>
> First of all, please don't be hard on yourself—you are definitely not stupid. Technology can be tricky, and bugs happen on our end too.
>
> I'm here to help you fix this. Let's take it one step at a time:
> 1. Could you tell me what happens when you tap the 'Start' button?
> 2. Are you seeing any error message on the screen?
>
> We'll get this sorted out together.
>
> Best,
> Walt"