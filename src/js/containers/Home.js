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
				</div>
			</div>
    );
  }
};