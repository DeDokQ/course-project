import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateFilm from '../components/modals/CreateFilm';
import CreateGenre from '../components/modals/CreateGenre';
import CreateStudio from '../components/modals/CreateStudio';

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false)
    const [studioVisible, setStudioVisible] = useState(false)
    const [filmVisible, setFilmVisible] = useState(false)

    return (
        <div>
            <Container className='AdminMain'>
                <Button className='AdminButton' onClick={() => setFilmVisible(true)}>Добавить страничку фильма</Button>
                <Button className='AdminButton' onClick={() => setGenreVisible(true)}>Добавить жанр</Button>
                <Button className='AdminButton' onClick={() => setStudioVisible(true)}>Добавить студию</Button>

                <CreateFilm show={filmVisible} onHide={() => setFilmVisible(false)}/>
                <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
                <CreateStudio show={studioVisible} onHide={() => setStudioVisible(false)}/>
            </Container>
            <hr />
            <div class="AdminHelping">
                <h2 class="AdminHelpText">Помощь администратору</h2>
                <div class="post-wrap">
                    <div class="post-item">
                        <div class="post-item-wrap">
                            <div class="post-link">
                            <h3 class="post-title">Как правильно добавить фильм?</h3>
                                <p class="post-content">
                                    Тут текст
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="post-item">
                        <div class="post-item-wrap">
                            <div class="post-link">
                                <h3 class="post-title">Что такое "основной жанр"? Как его создать?</h3>
                                <p class="post-content">
                                    Тут текст
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="post-wrap2">
                    <div class="post-item">
                        <div class="post-item">
                            <div class="post-item-wrap">
                                <div class="post-link">
                                    <h3 class="post-title">Что такое "студия"? Как ее создать</h3>
                                    <p class="post-content">
                                        Тут текст
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;