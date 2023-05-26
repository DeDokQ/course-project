import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const GenreBar = observer( () => {
    const {film} = useContext(Context)
    return (
        <ListGroup className='FilmListGroup'>
            {film.genres.map(genre =>
                <ListGroup.Item className='FilmListGroupGenre'
                    style={{cursor: 'pointer'}}
                    active={genre.id === film.SelectedGenre.id}
                    onClick={() => film.setSelectedGenre(genre)}
                    key={genre.id}
                >
                    {genre.title}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenreBar;