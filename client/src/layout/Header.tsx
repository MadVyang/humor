import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import logo from '../logo.png';
import { useState, useCallback } from 'react';
import RegisterModal from '../component/RegisterModal';


const Header = () => {
  const navigate = useNavigate();
  const [is_register_open, set_is_register_open] = useState<boolean>(false);
  const navHome = useCallback(() => {
    let path = '/';
    navigate(path);
  }, [navigate]);

  return <Navbar bg='light' className='mb-3'>
    <Container>
      <Navbar.Brand onClick={navHome}>
        <img
          src={logo}
          width="30"
          height="30"
          alt="logo"
        />
        {' '}
        Humor
      </Navbar.Brand>
      <Nav onClick={() => set_is_register_open(true)}>New</Nav>
      <RegisterModal
        show={is_register_open}
        onHide={() => set_is_register_open(false)}
      >
      </RegisterModal>
    </Container>
  </Navbar>
}

export default Header;