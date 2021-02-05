import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from "./components/footer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nick Damario",
      header: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Portfolio',
        subTitle: 'Projects',
        text: 'Check out my Projects below!'

      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'

      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand>Nick Damario</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-control="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
<Link className="nav-link" to="/">Home</Link>
<Link className="nav-link" to="/about">About</Link>
<Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;