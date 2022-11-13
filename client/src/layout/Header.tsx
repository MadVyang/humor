import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import logo from '../logo.png';
import { useCallback } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const routeChange = useCallback(() => {
    let path = '/';
    navigate(path);
  }, [navigate]);

  return <Navbar bg='light' className='mb-3'>
    <Container>
      <Navbar.Brand onClick={routeChange}>
        <img
          src={logo}
          width="30"
          height="30"
          alt="logo"
        />
        {' '}
        Humor
      </Navbar.Brand>
      <Nav>New</Nav>
    </Container>
  </Navbar>
}

export default Header;