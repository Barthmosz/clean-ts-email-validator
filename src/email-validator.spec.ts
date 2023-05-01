import { EmailValidator } from './email-validator'

describe('EmailValidator', () => {
    test('should return false if an invalid email is provided', () => {
        const sut = new EmailValidator()
        const isValid = sut.validate('@mail.com')
        expect(isValid).toBe(false)
    })

    test('should return false if an empty email is provided', () => {
        const sut = new EmailValidator()
        const isValid = sut.validate('')
        expect(isValid).toBe(false)
    })
})
