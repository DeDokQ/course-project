import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap'
import img_path from '../assets/EvangelionPage.jpg'

const FilmPage = () => {
           
    const film =  {id: 1, title: "Evangelion", rating: 4, img: img_path}
    const discription = [
        {id:1, title: 'Фильм основанный на РЕАЛЬНЫХ событиях',
        discription: 'Фильм очень интересный, подойдёт для просмотра в кругу семьи.'
        },
        {id:2, title: 'Берсерк - это то, что обязан посмотреть настоящий мужик',
        discription: 'Фильм очень интересный, подойдёт для просмотра в кругу семьи.'
        },
        {id:3, title: 'Тут пока не знаю что будет',
        discription: 'Фильм очень интересный, подойдёт для просмотра в кругу семьи.'
        },
        {id:4, title: 'Фильм пример',
        discription: 'Фильм очень интересный, подойдёт для просмотра в кругу семьи.'
        },
        {id:5, title: 'Я пятый, без меня не фильм',
        discription: 'Фильм очень интересный, подойдёт для просмотра в кругу семьи.'
        },
    ]
    return (
        <Container className='FilmPageMain'>
            <div class="FilmPageImgBlock">
                <Image className='FilmPageImg' src={film.img}/>
                <h2>{film.title}</h2>
                <h3>Оценка фильма {film.rating} / 10</h3>
            </div>

            <div class="FilmPageSecond">
                <h1>О фильме</h1>
                {discription.map(info =>
                    <Row key={info.id}>
                        <h3>{info.title}: {info.discription}</h3>
                    </Row>
                )}
            </div>

            <div class="FormBlock">
                Тут отправка рейтинга и сверху вывод
            </div>

            <div class="GoRate">
                <button class="btn-22">
                    <span>Это мой Отзыв!</span>
                </button>
            </div>
        </Container>
    );
};

export default FilmPage;