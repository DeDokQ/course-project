import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGenre = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createStudio = async (studio) => {
    const {data} = await $authHost.post('api/studios', studio)
    return data
}

export const fetchStudio = async () => {
    const {data} = await $host.get('api/studios')
    return data
}

export const createFilm = async (film) => {
    const {data} = await $authHost.post('api/film', film)
    return data
}

export const fetchFilm = async () => {
    const {data} = await $host.get('api/film')
    return data
}

export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/film/'+id)
    return data
}