// import { shallowMount } from '@vue/test-utils'
// const wrapper = shallowMount(HelloWorld, {
//   propsData: { msg }
// })

import payloadMaker from '@/utilities/payload-maker'

const fields = {
  username: {
    inputValue: "Rhi-Rhi"
  },
  email: {
    inputValue: "rhi@rhi.com"
  },
  password: {
    inputValue: "flow3rs"
  }
}

describe('Payload Maker Utility', () => {
  it('Returns expected data', () => {
    const payload = payloadMaker(fields, 'inputValue')
    expect(payload.username).toMatch('Rhi-Rhi')
    expect(payload.email).toMatch('rhi@rhi.com')
    expect(payload.password).toMatch('flow3rs')
  })
  it('Returns expected data without being given a key name', () => {
    const payload = payloadMaker(fields)
    expect(payload.username).toMatch('Rhi-Rhi')
    expect(payload.email).toMatch('rhi@rhi.com')
    expect(payload.password).toMatch('flow3rs')
  })
  it('Returns undefined if given no fields object', () => {
    const payload = payloadMaker()
    expect(payload.username).toBeUndefined()
  })
  it('Returns expected data', () => {
    const payload = payloadMaker(fields, 'nonexistant')
    expect(payload.username).toBeUndefined()
  })
})
