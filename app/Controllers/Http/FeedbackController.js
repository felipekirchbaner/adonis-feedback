'use strict'

const Feedback = use('App/Models/Feedback')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with feedbacks
 */
class FeedbackController {
  /**
   * Show a list of all feedbacks.
   * GET feedbacks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const feedbacks = await Feedback
      .query()
      .with('user')
      .fetch()

    return feedbacks
  }

  /**
   * Create/save a new feedback.
   * POST feedbacks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const feedback = Feedback.create(request.all())

    return feedback
  }

  /**
   * Display a single feedback.
   * GET feedbacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const feedback = await Feedback.findOrFail(params.id)

    await feedback.load('user')

    return feedback
  }

  /**
   * Update feedback details.
   * PUT or PATCH feedbacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const feedback = await Feedback.findOrFail(params.id)

    await feedback.merge(request.all())
    await feedback.save()

    return feedback
  }

  /**
   * Delete a feedback with id.
   * DELETE feedbacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const feedback = await Feedback.findOrFail(params.id)

    await feedback.delete()
  }
}

module.exports = FeedbackController
