import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
    
	<section id="footer">
		<div className="container pt-5">
			<div className="row text-center text-xs-center text-sm-right text-md-right">
				
				<div className="col-xs-12 col-sm-10 col-md-10">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="#Team"><i className="fa fa-angle-double-right"></i>Team</a></li>
						<li><a href="#Services"><i className="fa fa-angle-double-right"></i>Services</a></li>
						<li><a href="#Contact"><i className="fa fa-angle-double-right"></i>Contact</a></li>
						<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Techy Web Solutions</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Design by Techy Websolutions developed by Vishnu Vardhan Tenkani</p>
					
				</div>
				<hr/>
			</div>	
		</div>
	</section>
	
         );
    }
}
 
export default Footer;