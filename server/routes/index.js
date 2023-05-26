const Router = require('express')
const router = new Router()

const film_studiosRouter = require('./film_studiosRouter')
const filmRouter = require('./filmRouter')
const genre = require('./genreRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/film', filmRouter)
router.use('/studios', film_studiosRouter)
router.use('/genre', genre)


module.exports = router