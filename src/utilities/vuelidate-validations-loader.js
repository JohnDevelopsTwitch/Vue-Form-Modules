export default function vuelidateValidationsLoader(form = {}) {
  let validations
  if (form) {
      validations = { form: {}}
      Object.keys(form).forEach((key) => {
        const object = form[key]
        validations.form[key] = { inputValue: null}
        validations.form[key].inputValue = (object.validation) ? object.validation : {}
      })
    }
  return validations
}