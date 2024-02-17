import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand" ><h1>Книга контактов</h1></Link>
        <Nav className="me-auto">
            <Link to="/groups" className="nav-link">Группы</Link>
            <Link to="/favorit" className="nav-link">Избранное</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
