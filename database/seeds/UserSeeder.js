'use strict'

const User = use("App/Models/User")
/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    await User.createMany([
      {
        username: 'Viasoft Teste',
        email: 'teste@viasoft.com.br',
        password: 'admin123'
      }
    ])
    await Factory.model('App/Models/User').createMany(5);
  }
}

module.exports = UserSeeder
