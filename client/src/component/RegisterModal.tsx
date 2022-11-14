import { useState, useEffect, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { getUsers, postHumor } from '../api/api';

const RegisterModal = (props: any) => {
  const [users, set_users] = useState([]);
  const [selected_user_id, set_selected_user_id] = useState('0');
  const [humor, set_humor] = useState('');
  const [score, set_score] = useState(5);

  useEffect(() => {
    async function load() {
      const _users = await getUsers();
      set_users(_users);
      set_selected_user_id(_users[0].id);
    }
    load();
  }, []);

  const userOptions = useCallback(() => {
    return users.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>);
  }, [users]);

  const register = useCallback(() => {
    if (humor.trim() === '') {
      set_humor('');
      return;
    }
    async function load() {
      await postHumor(selected_user_id, humor.trim(), score);
    }
    load();
    props.onHide();
  }, [selected_user_id, humor, score, props]);

  return <Modal {...props} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        Register New Humor
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='mb-2 d-flex justify-content-between'>
        Who's humor?
        <Form.Select size="sm" className="w-50"
          onChange={e => { set_selected_user_id(e.target.value) }}
        >
          {userOptions()}
        </Form.Select>
      </div>
      <FloatingLabel label="Humor">
        <Form.Control
          as="textarea"
          placeholder={`Leave his humor here`}
          style={{ height: '200px' }}
          onChange={e => { set_humor(e.target.value); }}
        />
        <Form.Control.Feedback>Good</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Invalid humor</Form.Control.Feedback>
      </FloatingLabel>
      <div className='d-flex justify-content-end' >
        <Rating defaultValue={5} precision={0.5}
          onChange={(e, value) => { set_score(value ?? 0); }}
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={register}>Register</Button>
    </Modal.Footer>
  </Modal>
}

export default RegisterModal;