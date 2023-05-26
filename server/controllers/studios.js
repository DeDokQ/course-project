const {FilmStudios} = require('../models/models')
const ApiError = require('../errors/ApiError')

class StudiosController{

    async create(req, res){
        const {title} = req.body
        const studio = await FilmStudios.create({title})
        return res.json(studio)
    }

    async getAll(req, res){
        const studios = await FilmStudios.findAll()
        return res.json(studios)
    }
}

module.exports = new StudiosController()