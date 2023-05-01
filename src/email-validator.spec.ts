import { EmailValidator } from './email-validator'
import { type Validator } from './email-validator-protocol'

const makeSut = (): Validator => {
    const sut = EmailValidator
    return sut
}

describe('EmailValidator', () => {
    test('should return false if an invalid email is provided', () => {
        const sut = makeSut()
        const isValid = sut.validate('@mail.com')
        expect(isValid).toBe(false)
    })

    test('should return false if an empty email is provided', () => {
        const sut = makeSut()
        const isValid = sut.validate('')
        expect(isValid).toBe(false)
    })

    test('should return true if a valid email is provided', () => {
        const sut = makeSut()
        const isValid = sut.validate('valid_email@mail.com')
        expect(isValid).toBe(true)
    })
})
