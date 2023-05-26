import React from 'react';
import {observer} from 'mobx-react-lite'
// import '../styles/substyle.css'
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.jpg'
import {useNavigate} from 'react-router-dom';
import { FILM_ROUTE } from '../utils/consts';


const FilmItem = observer( ({film}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} onClick={() => navigate(FILM_ROUTE + '/' + film.id)} className='FilmItemUp'>
            
            <Card style={{width: 150, cursor:'pointer'}} border='light' >
            
                <Image width={150} src={process.env.REACT_APP_API_URL+film.img}/>
                <div class="FilmItemMain">
                <div>
                    {film.title}
                </div>
                    <div>
                        <div class="FilmItemIn">
                            {film.rating}
                            <Image src={star}/>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
});

export default FilmItem;