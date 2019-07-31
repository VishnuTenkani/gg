import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slides1.jpg';
import slide2 from '../images/slides2.jpg';
import slide3 from '../images/slides3.jpg';
class Header extends Component {
    state = {  }
      
    render() { 
        return ( 
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide" style={{opacity:"0.5"}}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p className="sider">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide" style={{opacity:"0.5"}}
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className="sider">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide" style={{opacity:"0.5"}}
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p className="sider">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> );
    }
}
 
export default Header;