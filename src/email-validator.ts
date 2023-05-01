export class EmailValidator {
    /**
     * Validates an email address.
     * @param {string} email
     * @returns {boolean}
    */
    static validate(email: string): boolean {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return emailRegex.test(email)
    }
}
