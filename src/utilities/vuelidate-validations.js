import { minLength } from 'vuelidate/lib/validators'

export const usernameValidator = {
    rules: {
        minLength: minLength(5)
    },
    errors: {
        minLength: 'Please enter atleast 5 characters'
    }
}

export const passwordValidator = {
    rules: {
        minLength: minLength(8)
    },
    errors: {
        minLength: 'Please enter atleast 8 characters'
    }
}