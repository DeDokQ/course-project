import {makeAutoObservable} from "mobx";

export default class FilmMRS{
    constructor(){
        this._genres = []

        this._studios = []
        
        this._films = []

        this._selectedType = {}
        this._selecredStudio = {}
        makeAutoObservable(this)
    }

    setGenres(genres){
        this._genres = genres
    }

    setStudios(studios){
        this._studios = studios
    }

    setFilm(films){
        this._films = films
    }

    setSelectedGenre(genre){
        this._selectedType = genre
    }

    setSelectedStudio(studio){
        this._selecredStudio = studio
    }

    get genres(){
        return this._genres
    }

    get studios(){
        return this._studios
    }

    get film(){
        return this._films
    }

    get SelectedGenre(){
        return this._selectedType
    }

    get SelectedStudio(){
        return this._selecredStudio
    }
}