const Router = require('express')
const router = new Router()
const filmStudios = require('../controllers/studios')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), filmStudios.create)
router.get('/', filmStudios.getAll)

module.exports = router