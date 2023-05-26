import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl } from 'react-bootstrap';
// import 'C:/course project/client/src/styles/substyle.css'

const CreateGere = ({show, onHide}) => {
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
                Добавить новый жанр
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='modal-body'>
                <Form>
                    <FormControl
                        placeholder={"Введите название жанра"}
                    />
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

export default CreateGere