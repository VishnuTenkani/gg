import React, { Component } from 'react';
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="Contact">
               <div className="row py-2">
                    <div className="col-10" style={{ textAlign: "center", color: "white" }}>
                        <div className="container"><h1>Contact Us</h1></div>
                    </div>
                    </div>
                    <div className="row">
                   <div className="col-4 pl-5">
                       <div className="container mr-5">
                           <h4 className="address">In India</h4>
                           <div className="underline"></div>
                           <h3>Mumbai</h3>
                           <h4>Maharashtra</h4>
                           <p>Zip Code :400604</p>
                           <p>Contact : 9999666111</p>
                    </div>
                   </div>
                   <div className="col-4 pl-5">
                       <div className="container mr-5">
                           <h4 className="address">In Canada</h4>
                           <div className="underline"></div>
                           <h3>Canada</h3>
                           <h4>Vancouver</h4>
                           <p>Postal Code :V5K 0C9</p>
                           <p>Contact : 9999666112</p>
                    </div>
                   </div>
                   <div className="col-4 pl-5">
                       <div className="container mr-5">
                           <h4 className="address">In London </h4>
                           <div className="underline"></div>
                           <h3>London </h3>
                           <h4>Becontree</h4>
                           <p>Postal Code : Essex, RM9 4TP</p>
                           <p>Contact : 9999666115</p>
                    </div>
                   </div>
                    </div>
            </section>
         );
    }
}
 
export default Contact;