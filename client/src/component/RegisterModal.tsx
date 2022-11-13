// import { useNavigate } from "react-router-dom";
// import { useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Rating } from '@mui/material';

const RegisterModal = (props: any) => {
  return <Modal {...props} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        Register New Humor
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='mb-2 d-flex justify-content-between'>
        Who's humor?
        <Form.Select size="sm" className="w-50">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <FloatingLabel label="Humor">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className='d-flex justify-content-end' >
        <Rating defaultValue={0} precision={0.5} />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => { }}>Register</Button>
    </Modal.Footer>
  </Modal>
}

export default RegisterModal;