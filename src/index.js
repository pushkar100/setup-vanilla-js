import B from './example'

/**
 * An example function
 *
 * @returns {object} an object
 */
function example() {
  const o = { Hi: '5' }
  return o
}
console.log(example())

const b = new B()
console.log(b.method())
