export function validatePassword(password: string): string | null {
    const minLength = 1;
    // const hasUpperCase = /[A-Z]/.test(password);
    // const hasLowerCase = /[a-z]/.test(password);
    // const hasDigit = /\d/.test(password);
    // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return 'Password must be at least 8 characters long';
    }
    // if (!hasUpperCase) {
    //     return 'Password must contain at least one uppercase letter';
    // }
    // if (!hasLowerCase) {
    //     return 'Password must contain at least one lowercase letter';
    // }
    // if (!hasDigit) {
    //     return 'Password must contain at least one digit';
    // }
    // if (!hasSpecialChar) {
    //     return 'Password must contain at least one special character';
    // }

    return null;
}
