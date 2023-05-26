import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                if(data.message === "Не авторизован"){
                    user.setUser({})
                    user.setIsAuth(false)
                    // console.log(data.token) // Проверка, что токен undefined
                }else{
                    user.setUser(data.email)
                    user.setIsAuth(true)
                    if(data.role == "ADMIN"){
                        console.log(data.role)
                        user.setAdmin(true)
                    }else{
                        user.setAdmin(false)
                    }
                    // console.log(data.token) // Проверка, что токен undefined
                }
                // user.setUser(data.email)
                
            }).finally(() => setLoading(false))
            
        }, 1000)

    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    // console.log(user.isAuth) // Проверяем, что пользователь получает статус не авторизован
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;