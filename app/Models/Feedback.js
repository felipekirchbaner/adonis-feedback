'use strict'

const Model = use('Model')

class Feedback extends Model {
  user () {
    return this.belongsTo('App/Models/User').select('id', 'username', 'email')
  }
  static get dates () {
    return super.dates.concat(['created_at', 'updated_at', 'date'])
  }
}

module.exports = Feedback
