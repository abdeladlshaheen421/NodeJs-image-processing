import validation from './../controllers/validationController'
// test function that check query param is defined or not
describe('test required function to validate inputs', (): void => {
  it('when param undefined', () => {
    let name
    expect(validation.definedParam(name)).toBeFalsy()
  })

  it('when param is defined', () => {
    const name = 'wonder'
    expect(validation.definedParam(name)).toBeTruthy()
  })

  // function to test that width or height is correct
  it('when dimension is valid', () => {
    expect(validation.validDimension('40')).toBeTruthy()
  })

  it('when dimension is not valid', () => {
    expect(validation.validDimension('ss0')).toBeFalsy()
  })

  it('when dimension with negative value', () => {
    expect(validation.validDimension('-30')).toBeFalsy()
  })

  it('when image is exist', () => {
    expect(validation.isImage('wonder1')).toBeTruthy()
  })
})
