import React, { Component } from 'react';

class Project extends Component {
    state = {}
    render() {
        return (
            <section id="Project">
                <div className="row py-2">
                    <div className="col-10" style={{ textAlign: "center", color: "white" }}>
                        <div className="container"><h1>Our Projects</h1></div>
                    </div>
                    <ul class="ch-grid">
                        <li>
                            <div class="ch-item ch-img-1">
                                <div class="ch-info">
                                    <h3>Use what you have</h3>
                                    <p>by Techy Websolution<a className="anchor" href="http://drbl.in/eOPF">View on Dribbble</a></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ch-item ch-img-2">
                                <div class="ch-info">
                                    <h3>Common Causes of Stains</h3>
                                    <p>by Techy Websolution <a className="anchor" href="http://drbl.in/eKMi">View on Dribbble</a></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ch-item ch-img-3">
                                <div class="ch-info">
                                    <h3>Pink Lightning</h3>
                                    <p>by Techy Websolution <a className="anchor" href="http://drbl.in/ekhp">View on Dribbble</a></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </section>);
    }
}

export default Project;