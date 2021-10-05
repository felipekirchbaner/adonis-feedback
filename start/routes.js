'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/sessions', 'SessionController.create')

Route.resource('feedbacks', 'FeedbackController')
  .apiOnly()
  .middleware('auth')

Route.resource('users', 'UserController')
  .apiOnly()
  .middleware('auth')
