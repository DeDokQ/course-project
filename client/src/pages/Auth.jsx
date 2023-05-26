import React, { useContext, useState } from 'react';
import '../styles/mainStyle.css'
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom';
import { FILMS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import {useNavigate} from 'react-router-dom';

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(FILMS_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="Auth">
            <Card className="AuthCard">  
                <h2 style={{color: "rgb(52, 45, 35)"}}>{isLogin ? 'Авторизация' : 'Регистрация' }</h2>
                <Form className='AuthForm'>
                    <FormControl 
                        className='mt-2'
                        placeholder='Введите Ваш логин...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl 
                        className='mt-2'
                        placeholder='Введите Ваш пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row>
                        {isLogin ? 
                            <div class="AuthNoAccount">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь.</NavLink>
                            </div>
                            :
                            <div>
                                Есть акаунт? <NavLink to={LOGIN_ROUTE}>Тогда заходите!.</NavLink>
                            </div>
                        }
                        <Button className='AuthButton' 
                                onClick={click}
                        >
                            {isLogin ? 'Войти' : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;