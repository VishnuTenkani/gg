import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Team from './Components/Team';
import Project from './Components/Projects'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


class App extends Component {
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Team />
        <Project />
        <Services />
        <Contact />
        <Footer />

      </React.Fragment>

    );
  }
}

export default App;
