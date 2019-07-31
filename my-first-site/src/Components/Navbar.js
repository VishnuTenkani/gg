import React, { Component } from 'react';
class Navbar extends Component {
    state = { activeClassName:'Home' }
    changeNav = (id)=>{
  let  classNameActive;
      if (id == 1){
        classNameActive = this.setState.activeClassName = "Home";
      }
      else if(id == 2){
        classNameActive = this.setState.activeClassName = "Team";
      }
      else if(id == 3){
        classNameActive = this.setState.activeClassName = "Projects";
      }
      else if(id == 4){
        classNameActive = this.setState.activeClassName = "Services";
      }
      else if(id == 5){
        classNameActive = this.setState.activeClassName = "Contact";
      }
      this.setState(()=>{
        return {activeClassName : classNameActive}
      })
      
    }

    render() { 
        return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Techy Template </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" className={(this.state.activeClassName === "Home") ? "active" : ""} onClick={() => this.changeNav('1')}>
                <a className="nav-link smoothscroll" href="/">Home
                      <span className="sr-only">(current)</span>
                    </a>
              </li>
              <li className="nav-item" className={(this.state.activeClassName === "Team") ? "active" : ""} onClick={() => this.changeNav('2')}>
                <a className="nav-link smoothscroll" href="#Team">Team</a>
              </li>
              <li className="nav-item" className={(this.state.activeClassName === "Projects") ? "active" : ""} onClick={() => this.changeNav('3')}>
                <a className="nav-link smoothscroll" href="#Project">Projects</a>
              </li>
              <li className="nav-item" className={(this.state.activeClassName === "Services") ? "active" : ""} onClick={() => this.changeNav('4')}>
                <a className="nav-link smoothscroll" href="#Services">Services</a>
              </li>
              <li className="nav-item" className={(this.state.activeClassName === "Contact") ? "active" : ""} onClick={() => this.changeNav('5')}>
                <a className="nav-link smoothscroll" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> );
    }
}
 
export default Navbar;