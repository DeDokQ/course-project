import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Card, Row } from 'react-bootstrap';
import { Context } from '../index';

const StudioBar = observer( () => {
    const {film} = useContext(Context)
    return (
        <Row className='StudioRow'>
            {film.studios.map(studio =>
                <Card
                style={{cursor: 'pointer'}}
                    className=''
                    key={studio.id}
                    onClick={() => film.setSelectedStudio(studio)}
                    // border={studio.id === film.SelectedStudio.id ? 'red' : 'purple'}
                >
                    {studio.title}
                </Card>    
            )}
        </Row>
    );
});

export default StudioBar;