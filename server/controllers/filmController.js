const uuid = require('uuid')
const path = require('path')
const {Film, FilmInfo} = require('../models/models')
const ApiError = require('../errors/ApiError')
const { groupEnd } = require('console')

class FilmController{

    async create(req, res, next){

        try{
            let {title, filmStudioId, genreId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const film = await Film.create({title, genreId, filmStudioId, img: filename})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    FilmInfo.create({
                        title: i.title, 
                        discription: i.discription,
                        filmId: film.id
                    })
                )
            }
    
            return res.json(film)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res){
        let {genreId, filmStudioId, limit, page} = req.query
        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit
        let films;

        if(!genreId && !filmStudioId){
            films = await Film.findAndCountAll({limit, offset})
        }

        if(genreId && !filmStudioId){
            films = await Film.findAndCountAll({where: {genreId}, limit, offset})
        }

        if(!genreId && filmStudioId){
            films = await Film.findAndCountAll({where: {filmStudioId}, limit, offset})
        }
        if(genreId && filmStudioId){
            films = await Film.findAndCountAll({where: {genreId, filmStudioId}, limit, offset})
        }
        return res.json(films)
    }

    async getOne(req, res){
        const {id} = req.params
        const film = await Film.findOne(
            {
                where: {id},
                include: [{model: FilmInfo, as: 'info'}]
            },
        )
        return res.json(film)
    }
}

module.exports = new FilmController()