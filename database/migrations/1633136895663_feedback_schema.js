'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.date('date').notNullable()
      table.string('improve').notNullable()
      table.string('maintain').notNullable()
      table.string('suggestion').notNullable()
      table.string('feedback').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('feedbacks')
  }
}

module.exports = FeedbackSchema
