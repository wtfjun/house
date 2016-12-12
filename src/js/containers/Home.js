import React, { Component } from 'react';

import FU1 from '../../img/FU1.png'
import FU2 from '../../img/FU2.png'
import FU3 from '../../img/FU3.png'
import FU4 from '../../img/FU4.png'
export default class Home extends Component {
  render() {
    return (
			<div className="home">
				<div id="fullpage">
			    <div className="section">
			    	<img src='https://www.houseofhackney.com/media/wysiwyg/HP_ALL_Desktop_.jpg' />
			    </div>
			    <div className="section">
			    	<img src='https://www.houseofhackney.com/media/wysiwyg/021216_DESKTOP_02.jpg' />
			    </div>
			    <div className="section">
			    	<img src='https://www.houseofhackney.com/media/wysiwyg/021216_DESKTOP_03.jpg' />
			    </div>
			    <div className="section">
			    	<img src='https://www.houseofhackney.com/media/wysiwyg/HP_ALL_Desktop_.jpg' />
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