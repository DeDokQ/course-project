const {Rating} = require('../models/models')
const ApiError = require('../errors/ApiError')

class RatingController{

    async create(req, res, next){
        try {
            let {rate, comment, userId, filmId} = req.body

            const rating = await Rating.create({rate, comment, userId, filmId})

            return res.json(rating)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    // async create(req, res){
    //     const {title} = req.body
    //     const genre = await Genre.create({title})
    //     return res.json(genre)
    // }

    // async getAll(req, res){
    //     const genres = await Genre.findAll()
    //     return res.json(genres)
    // }
}

module.exports = new RatingController()