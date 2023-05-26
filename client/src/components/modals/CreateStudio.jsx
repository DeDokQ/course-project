import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl } from 'react-bootstrap';

const CreateStudio = ({show, onHide}) => {
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
                Добавить новую студию
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='modal-body'>
                <Form>
                    <FormControl
                        placeholder={"Введите название студии"}
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

export default CreateStudio