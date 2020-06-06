import B from '../src/example'

describe('Testing example', () => {
  it('must instantiate class B with state & method', () => {
    const b = new B()
    expect(b).toHaveProperty('state')
    expect(b).toHaveProperty('method')
  })
})
