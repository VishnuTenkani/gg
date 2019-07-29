import React, { Component } from 'react';


class Services extends Component {
    state = {}
    render() {
        return (
            <section id="Services">
                <div className="row py-2">
                    <div className="col-10" style={{ textAlign: "center", color: "white" }}>
                        <div className="container"><h1>Our Services</h1></div>
                    </div>
                </div>
                <div className="row m-auto" >
                    <div className="col-3">
                        <div className="card floating">
                            <div className="container pt-3" style={{ textAlign: 'center' }}>
                                <h1>Web Development</h1>
                                <div className="serv_img1"></div>
                                <p>Web development is the work involved in developing 
                                    a web site for the Internet or an intranet. Web development
                                     can range from developing a simple single static page of plain text 
                                     to complex web-based internet applications, electronic businesses, 
                                     and social network services.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card floating">
                            <div className="container pt-3" style={{ textAlign: 'center' }}>
                                <h1>Mobile app Development</h1>
                                <div className="serv_img2"></div>
                                <p>
                                Mobile app development is the act or process by which
                                 a mobile app is developed for mobile devices, such as personal digital assistants, 
                                 enterprise digital assistants or mobile phones. 
                                 These applications can be pre-installed on phones during manufacturing platforms
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card floating">
                            <div className="container pt-3" style={{ textAlign: 'center' }}>
                                <h1>Ideas Development</h1>
                                <div className="serv_img3"></div>
                                <p>The total national income divided by the number of people in the Nation. Per Capita income is a measure of mean income within an economic aggregate, such as a Country.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card floating">
                            <div className="container pt-3" style={{ textAlign: 'center' }}>
                                <h1>Training and Development</h1>
                                <div className="serv_img4"></div>
                                <p>Training and development involves improving the effectiveness of organizations and the individuals and teams within them.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>);
    }
}

export default Services;