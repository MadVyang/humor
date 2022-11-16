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
  const [img, set_img] = useState<any>();
  const [img_src, set_img_src] = useState<string>('');
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

  useEffect(() => {
    set_img(null);
    set_img_src('');
    set_humor('');
    set_score(5);
  }, [props]);

  const userOptions = useCallback(() => {
    return users.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>);
  }, [users]);

  const imgOnChange = useCallback((e: any) => {
    const img_file = (e.target as HTMLInputElement).files?.[0];
    const fr = new FileReader();
    fr.onload = function () {
      set_img_src(String(fr.result));
    }
    if (img_file) fr.readAsDataURL(img_file);
    set_img(img_file);
  }, []);

  const register = useCallback(() => {
    if (humor.trim() === '' && img_src === '') {
      if (humor.trim() === '')
        set_humor('');
      return;
    }
    async function load() {
      let form_data = new FormData();
      form_data.append('user_id', selected_user_id);
      form_data.append('img', img);
      form_data.append('humor', humor.trim());
      form_data.append('score', String(score));
      await postHumor(form_data);
    }
    load();
    props.onHide();
    set_img(null);
    set_img_src('');
    set_humor('');
    set_score(5);
  }, [selected_user_id, img, img_src, humor, score, props]);

  return <Modal {...props} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        Register New Humor
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='mb-2 d-flex justify-content-between'>
        Whose humor?
        <Form.Select size="sm" className="w-50"
          onChange={e => { set_selected_user_id(e.target.value) }}
        >
          {userOptions()}
        </Form.Select>
      </div>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select humor image</Form.Label>
        <Form.Control type="file" accept="image/png, image/jpeg" onChange={imgOnChange} />
      </Form.Group>
      {img_src !== '' ? <div className='mb-2' style={{ height: '200px', overflowY: 'scroll' }}>
        <img src={img_src} alt='humor img' width='100%' height='auto'></img>
      </div> : ''}
      <FloatingLabel label="Humor description">
        <Form.Control
          as="textarea"
          style={{ height: '70px' }}
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