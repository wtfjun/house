import React, { Component } from 'react';
import $ from 'jquery'

import FU1 from '../../img/HP_ALL_Desktop_1.jpg'
import FU2 from '../../img/HP_ALL_Desktop_2.jpg'
import FU3 from '../../img/HP_ALL_Desktop_3.jpg'
import SMALL1 from '../../img/home_small_1.jpg'
import SMALL2 from '../../img/home_small_2.jpg'
import SMALL3 from '../../img/home_small_3.jpg'
export default class Home extends Component {
	componentDidMount() {
		$('.img-hover').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$(this).siblings('.bottom-img').show()
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).siblings('.bottom-img').hide()
		});
	}
  render() {
    return (
			<div className="home">
				<div id="fullpage">
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<div className="bottom-img">
		    			<img src={SMALL1} />
		    			<img src={SMALL2} />
		    			<img src={SMALL3} />
			    	</div>
			    	<div className="img-hover">
			    		<span className="glyphicon glyphicon-align-justify"></span>
			    	</div>
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<div className="bottom-img">
		    			<img src={SMALL1} />
		    			<img src={SMALL2} />
		    			<img src={SMALL3} />
			    	</div>
			    	<div className="img-hover">
			    		<span className="glyphicon glyphicon-align-justify"></span>
			    	</div>
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<div className="bottom-img">
		    			<img src={SMALL1} />
		    			<img src={SMALL2} />
		    			<img src={SMALL3} />
			    	</div>
			    	<div className="img-hover">
			    		<span className="glyphicon glyphicon-align-justify"></span>
			    	</div>
			    </div>
			    <div className="section">
			    	<h1 className="text">
			    		FABRIC UNION <br />
			    		<small>apple vita C</small>
			    	</h1>
			    	<div className="bottom-img">
		    			<img src={SMALL1} />
		    			<img src={SMALL2} />
		    			<img src={SMALL3} />
			    	</div>
			    	<div className="img-hover">
			    		<span className="glyphicon glyphicon-align-justify"></span>
			    	</div>
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