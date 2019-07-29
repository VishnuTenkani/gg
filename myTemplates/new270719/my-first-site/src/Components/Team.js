import React, { Component } from 'react';
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import ceo from '../images/ceo.jpg'
class Team extends Component {
  state = {}
  render() {
    return (
      <section id="Team">
        <div className="row py-2">
          <div className="col-10" style={{ textAlign: "center", color: "white" }}>
            <div className="container"><h1>Our Team</h1></div>
          </div>
        </div>
        <div className="row m-auto">
          <div className="col-3">
            <div className="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={ceo} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                  </div>
                  <div class="flip-card-back">
                    <h1>Vishnu Vardhan Tenkani</h1>
                    <p>CEO & developer</p>
                    <p>Techy Websolutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={team1} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                  </div>
                  <div class="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Designer </p>
                    <p>Very creative and innovative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={team2} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                  </div>
                  <div class="flip-card-back">
                    <h1>Kenny George</h1>
                    <p>Developer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={team3} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                  </div>
                  <div class="flip-card-back">
                    <h1>Newton</h1>
                    <p>Tester</p>
                    <p>Very accuracy testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
