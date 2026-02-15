// 1. Fixed: Magic Numbers & Strings 
const ROLES = {
    ADMIN: 1,
    SUPER_USER: 2
};
const DISCOUNT_RATE = 0.9;

// 2. Fixed: Large Class 
class EmailService {
    static send(email, message) {
        console.log(`Sending to ${email}: ${message}`);
    }
}

class UserHandler {
    // 3. Fixed: Inconsistent Naming 
    processUser(user) {
        // 4. Fixed: Deeply Nested 
        if (!user || !user.age || user.age < 18) {
            return;
        }

        this.handleUserRole(user);
    }

    // 5. Fixed: Long Function 
    handleUserRole(user) {
        if (user.role === ROLES.ADMIN) {
            this.applyDiscount(user.balance, "Admin");
            EmailService.send(user.email, "Welcome Admin");
        } else if (user.role === ROLES.SUPER_USER) {
            this.applyDiscount(user.balance, "SuperUser");
        } else {
            console.log("User login");
        }
    }
    applyDiscount(balance, roleName) {
        const discountedTotal = balance * DISCOUNT_RATE;
        console.log(`${roleName} total: ${discountedTotal}`);
    }
}

const handler = new UserHandler();
handler.processUser({ age: 20, role: ROLES.ADMIN, balance: 100, email: "test@test.com" });