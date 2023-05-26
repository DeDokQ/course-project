import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import { Row } from 'react-bootstrap';
// import '../styles/substyle.css'
import FilmItem from './FilmItem';


const FilmList = observer( () => {
    const {film} = useContext(Context)
    console.log(film)
    return (
        <Row className='FilmListMain' >
            {film.film.map(film =>
                <FilmItem key={film.id} film={film}/>
            )}
        </Row>
    );
});

export default FilmList;