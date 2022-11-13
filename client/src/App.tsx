import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import NotFound from './page/NotFound';
import Ranking from './page/Ranking';
import UserDetail from './page/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Container>
        <Routes>
          <Route path="/" element={<Ranking />}></Route>
          <Route path="/user/:user_id" element={<UserDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
