require('dotenv').config() // Импортируем конфиг настроек
const express = require('express')
const sequelize = require('./db') // Импортируем базу данных
const models = require('./models/models') // Импортируем модели для базы данных
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000 // Наш порт

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// ВСЕГДА В КОНЦЕ, т.к. обрабатывает ОШИБКИ!!!
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
        
    } catch (e){
        console.log(e)
    }
}

start()