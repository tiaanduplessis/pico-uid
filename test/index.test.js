import uid from '../src'

test('should be defined', () => {
  expect(uid).toBeDefined()
})

test('should generate unique id with specified length', () => {
  expect(uid(10).length).toBe(10)
  expect(uid(20, 16).length).toBe(20)
})