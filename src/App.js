import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';

// import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";




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
        title: 'About'
      },
      contact: {
        title: 'Contact'

      },
      landing: {
        title: 'Welcome to my page!',
        text: ''
      }
    }
  }


  render() {
    return (
      <div>
      <Router>
         <div>
        
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
          </div>
          <Switch>

          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />}></Route>
          <Route path="/home" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />}></Route>
          <Route path="/React-Portfolio" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />}></Route>
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />


          </Switch>

        
          <div><Footer/></div>
      

        {/* </Container> */}
       

 
      </Router>
      </div>
    );
  }
}

export default App;
