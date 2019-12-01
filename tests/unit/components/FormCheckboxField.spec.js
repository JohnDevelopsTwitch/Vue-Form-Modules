import { mount } from '@vue/test-utils'
import FormCheckboxField from '@/components/FormCheckboxField.vue'

describe('Form Checkbox Field', () => {
  it('Component attributes populate', () => {
    const wrapper = mount(FormCheckboxField, {
      propsData: {
        inputValue: '',
        validation: {
          required: {},
        },
        field: {
          disabled: false, 
          label: "Enter your Username",
          name: "username",
          errors: {
            required: 'This field is required',
          }
        }
      }
    })
    expect(wrapper.contains('label')).toBe(true)
    expect(wrapper.contains('h5')).toBe(true)
    expect(wrapper.find('h5').text()).toBe('Enter your Username')
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.find('input').attributes('name')).toBe('username')
  })
  it('Disables field if disabled property true', () => {
    const wrapper = mount(FormCheckboxField, {
      propsData: {
        value: '',
        validation: {
          required: {},
        },
        field: {
          disabled: true,
        }
      }
    })
    expect(wrapper.find('input').attributes('disabled')).toBe('disabled')
  })
})