import vuelidateValidationsLoader from '@/utilities/vuelidate-validations-loader'

describe('Vuelidate Validations Loader Utility', () => {
  it('Returns an object of validations based on given object of form data', () => {
    const form = {
      username: {
        inputValue: "",
        validation: {
          required: {}
        }
      }
    }
    const output = vuelidateValidationsLoader(form)
    expect(output).toEqual(expect.objectContaining({ form: { username: { inputValue: { required: {}}}}}))
  })

  it('Returns an empty object if given no form data', () => {
    const output = vuelidateValidationsLoader()
    expect(output).toEqual(expect.objectContaining({}))
  })

})
