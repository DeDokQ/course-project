const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    comment: {type: DataTypes.INTEGER, allowNull: true},
})

const Film = sequelize.define('film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FilmStudios = sequelize.define('film_studios', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FilmInfo = sequelize.define('film_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false},
})

Film.hasMany(Rating)
Rating.belongsTo(Film)

User.hasMany(Rating)
Rating.belongsTo(User)

Film.hasMany(FilmInfo, {as: 'info'});
FilmInfo.belongsTo(Film)

Genre.hasMany(Film)
Film.belongsTo(Genre)

FilmStudios.hasMany(Film)
Film.belongsTo(FilmStudios)

module.exports = {
    User, Rating, Film, Genre, FilmStudios, FilmInfo
}