import router from '../regUsers.route'

describe('regUser router', () => {
  test('has crud routes', () => {
    const routes = [
      { path: '/', method: 'post' }
    ]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
