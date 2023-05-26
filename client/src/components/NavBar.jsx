import React, { useContext } from 'react';
import {Context} from "../index";
import '../styles/mainStyle.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, FILMS_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    console.log(user)

    return (
        <div class="header">  
            <div>
                <Navbar className="header_ul">
                    <div class="HeaderMainText">
                        <NavLink id="header" className="header_text" to={FILMS_ROUTE}>Оценочка</NavLink>
                    </div>
                    {user.isAuth ?
                        user.isAdmin ?
                            <Nav className = "header_ul">
                                <Button className="button" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                                <Button className="button" onClick={() => navigate(LOGIN_ROUTE) | logOut()} >Разлогиниться</Button>
                            </Nav>
                            :
                            <Button className="button" onClick={() => navigate(LOGIN_ROUTE) | logOut()} >Разлогиниться</Button>
                        :
                        <Nav className = "header_ul">
                            <Button className="button" onClick={() => navigate(LOGIN_ROUTE)}>Авторизоваться</Button>
                        </Nav>
                    }  
                </Navbar>
            </div>
        </div>
    );
});

export default NavBar;