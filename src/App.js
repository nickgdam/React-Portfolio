import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from "./components/footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
// import Navbar from "./components/Navbar"



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
        text: 'Projects',
        subTitle: 'check my stuff!',
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
          <Navbar className='secondary dog' bg="" expand="lg">
            <Navbar.Brand>Nick Damario</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-control="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
          <Route path="/about" render={() => <About title={this.state.about.title}/>}/>
          <Route path="/contact" render={() => <Contact title={this.state.contact.title}/>}/>



          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
