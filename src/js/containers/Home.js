import React, { Component } from 'react';

import FU1 from '../../img/HP_ALL_Desktop_1.jpg'
import FU2 from '../../img/HP_ALL_Desktop_2.jpg'
import FU3 from '../../img/HP_ALL_Desktop_3.jpg'
export default class Home extends Component {
  render() {
    return (
			<div className="home">
				<div id="fullpage">
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>

			    	<img src={FU3} />
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<img src={FU1} />
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<img src={FU2} />
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<img src={FU3} />
			    </div>
			    <div className="footer section fp-auto-height">
			    		SUBSCRIBE TO OUR NEWSLETTER
			    		<br />
			    		<p>Find us: House of Hackney Flagship Store, 131 Shoreditch High Street. London. E1 6JE Call us +44 (0) 207 613 5559
			    		</p>
			    </div>
				</div>
			</div>
    );
  }
};