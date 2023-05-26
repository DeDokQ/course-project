import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import { Context } from 'C:/course project/client/src/index.js';

const CreateFilm = ({show, onHide}) => {

    const {film} = useContext(Context)
    const [info, setInfo ] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', discription: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return(
        <div class="fade modal show innerOne">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <Modal
              show = {show}
              onHide={onHide}
              className='modal-content'
            >
            <Modal.Header className='modal-header' closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый фильм
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='modal-body'>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Выберите основной жанр
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown big">
                            {film.genres.map(genre =>
                                <Dropdown.Item key={genre.id}>
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <br /><br />
                    <Dropdown>
                        <Dropdown.Toggle>
                            Выберите студию
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {film.studios.map(studio =>
                                <Dropdown.Item key={studio.id}>
                                    {studio.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <br /><br />
                    <Form.Control
                        placeholder='Введите название фильма'
                    />
                    <Form.Control
                        type="file"
                    />

                    <hr/>
                    
                    <Button onClick={addInfo}>
                        Добавить описание
                    </Button>
                    {info.map(i =>
                        <Row key={i.number}>
                            <div>
                                <Form.Control
                                    placeholder='Введите блок title'
                                />
                            </div>

                            <div>
                                <Form.Control
                                    placeholder='Введите блок description'
                                />
                            </div>

                            <div>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </Row>
                    )}
                </Form>
            </Modal.Body>

            <Modal.Footer className='modal-footer'>
                <Button className='CloseButton' onClick={onHide}>Закрыть</Button>
                <Button className='AuthButton' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
          </Modal>
        </div> 
      </div>
    );
};

export default CreateFilm