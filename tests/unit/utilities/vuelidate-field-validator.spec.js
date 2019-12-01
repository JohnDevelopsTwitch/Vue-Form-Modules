import vuelidateFieldValidator from '@/utilities/vuelidate-field-validator'

describe('Vuelidate Field Validatior Utility', () => {
  it('Returns an array with one error object', () => {
    const errors = {
      required: 'Required Field Error'
    }
    const usernameValidation = {
      $touch() {
        return jest.fn()
      },
      $params: {
        'required': {}
      },
      $dirty: true,
      required: false
    }
    const output = vuelidateFieldValidator(usernameValidation, errors)
    expect(output.length).toEqual(1)
  })
  
  it('Returns an array with multiple error objects', () => {
    const errors = {
      required: 'Required Field Error',
      minLength: 'Minimum Length Not Met'
    }
    const usernameValidation = {
      $touch() {
        return jest.fn()
      },
      $params: {
        'required': {},
        'minLength': {}
      },
      $dirty: true,
      required: false,
      minLength: false
    }
    const output = vuelidateFieldValidator(usernameValidation, errors)
    expect(output.length).toEqual(2)
  })

  it('Returns empty array if validators are true', () => {
    const errors = {
      required: 'Required Field Error',
      minLength: 'Minimum Length Not Met'
    }
    const usernameValidation = {
      $touch() {
        return jest.fn()
      },
      $params: {
        'required': {},
        'minLength': {}
      },
      $dirty: true,
      required: true,
      minLength: true
    }
    const output = vuelidateFieldValidator(usernameValidation, errors)
    expect(output.length).toEqual(0)
  })
})
