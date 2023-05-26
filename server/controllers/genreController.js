const {Genre} = require('../models/models')
const ApiError = require('../errors/ApiError')

class GenreController{

    async create(req, res){
        const {title} = req.body
        const genre = await Genre.create({title})
        return res.json(genre)
    }

    async getAll(req, res){
        const genres = await Genre.findAll()
        return res.json(genres)
    }
}

module.exports = new GenreController()