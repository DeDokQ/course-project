import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GenreBar from '../components/GenreBar';
import StudioBar from '../components/StudiosBar';
import FilmList from '../components/FilmList';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import { fetchFilm, fetchGenre, fetchStudio } from '../http/filmAPI';

const Films = observer( () => {
    const {film} = useContext(Context)

    useEffect(() => {
        fetchGenre().then(data => film.setGenres(data))
        fetchStudio().then(data => film.setStudios(data))
        fetchFilm().then(data => film.setFilm(data.rows))
    }, [])

    return (
        <div class="FilmsMain">

            <div class="FilmsInMain">
                <div class="InMainOne">
                    <p>Основной жанр</p>
                    <Col md={3} className='Col1'>
                        <GenreBar/>
                    </Col>
                    
                </div>

                <div class="InMainTwo">
                    <p>Студии</p>
                    <Col md={9} className='Col2'>
                        <StudioBar/>
                    </Col>
                </div>
                
            </div>

            <hr/>

            <div class="FilmsLine">
                <Col md={9} className='Col2'>
                    <FilmList/>
                </Col>
            </div>

            <hr/>
        </div>
    );
});

export default Films;