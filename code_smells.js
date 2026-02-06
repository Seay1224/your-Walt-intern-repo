class UserHandler {
    constructor() {
        this.users = [];
    }
    handle(u) {
        if (u) {
            if (u.age) {
                if (u.age >= 18) {
                    // 2. Magic Numbers & Strings 
                    if (u.role === 1) { 
                         // 3. Duplicate Code 
                        let d = u.bal * 0.9; 
                        console.log("Admin total: " + d);
                        this.sendEmail(u.em, "Welcome Admin");
                    } else {
                        console.log("User login");
                    }
                }
            }
        }

        // ... Duplicate Code again 
        if (u && u.role === 2) {
             let d = u.bal * 0.9; 
             console.log("SuperUser total: " + d);
        }
    }

    // 4. Large Class 
    sendEmail(email, msg) {
        console.log(`Sending to ${email}: ${msg}`);
    }
}

const handler = new UserHandler();
handler.handle({ age: 20, role: 1, bal: 100, em: "test@test.com" });