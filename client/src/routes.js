import Auth from "./pages/Auth"
import FilmPage from "./pages/FilmPage"
import Films from "./pages/Films"
import Admin from "./pages/admin"
import { ADMIN_ROUTE, FILMS_ROUTE, FILM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: FILMS_ROUTE,
        Component: Films    
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FILM_ROUTE + '/:id',
        Component: FilmPage
    },
]