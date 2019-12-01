export default function vuelidateFieldValidator(validation = false, errorOutput = []) {
    let errors = []
    if (validation && validation.$params !== undefined) {
        validation.$touch()
        Object.keys(validation.$params).forEach((key, index) => {
            if (validation.$dirty && validation[key] == false) {
                errors.push({
                    id: `${index}`,
                    text: errorOutput[key]
                })
            }
        })
    }
    return errors
}