import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { Carousel } from 'antd';

import P1 from '../../img/003_b8a20764-c9de-42b5-aa2a-7c45f24776bd-1200x800.jpg'
import p1 from '../../img/1.jpg'
import p2 from '../../img/2.jpg'
import p3 from '../../img/3.jpg'
import p4 from '../../img/4.jpg'
import p5 from '../../img/5.jpg'
import p6 from '../../img/6.jpg'
import p7 from '../../img/7.jpg'






export default class Product extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)   
  }

  next() {
    this.refs.slider.slickNext()
  }
  previous() {
    this.refs.slider.slickPrev()
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
    	<div className="product">
    		<div className="pro-header"></div>
    		<div className="pro-cont">
    			<Grid>
    				<Row>
    					<Col md={5} sm={5}>
    						<div className="pro pro1">
    							<div className="text">
                                    <i className="pre-heading">Accessories</i>
                                    <br />
                                    <span>DREAM GIFTS</span>
                                    <p className="font-hei">SHOP THE EDIT</p>
                                </div>
    						</div>
    						<div className="pro pro4">
    							<div className="img-cont"></div>
    							<div className="text">
                                     <i className="pre-heading">Accessories</i>
                                    <br />
                                    <span>DREAM GIFTS</span>
                                    <p className="font-hei">SHOP THE EDIT</p>
                                </div>
    						</div>
    					</Col>
    					<Col md={3} sm={3}>
    						<div className="pro pro2">
                                <div className="text">
                                    <i className="pre-heading">Accessories</i>
                                    <br />
                                    <span>DREAM GIFTS</span>
                                    <p className="font-hei">SHOP THE EDIT</p>
                                </div>
                            </div>
    						<div className="pro pro5"></div>
    					</Col>
    					<Col md={3} sm={3}>
    						<div className="pro pro3">
                                <div className="top">
                                  <span style={{float: 'left', paddingLeft: 14}}  onClick={this.previous}> {'<'} </span>Shop Classics<span style={{float: 'right', paddingRight: 14}}  onClick={this.next}> {'>'} </span>
                                </div>
                                <Carousel dots={false} className="pro-con" ref='slider' {...settings}>
                                    <div><div className="img"><img src={P1} /></div><span>dawdawaddwd</span></div>
                                    <div><h3>2</h3></div>
                                    <div><h3>3</h3></div>
                                </Carousel>
                                <div className="bottom1">Shop Classics</div>
                                <div className="bottom2">Shop Contemporary Classics</div>
                            </div>
    						<div className="pro pro6">
    							<div className="img-cont"></div>
    							<div className="text">
                                    <i className="pre-heading">Accessories</i>
                                    <br />
                                    <span>DREAM GIFTS</span>
                                    <p className="font-hei">SHOP THE EDIT</p>
                                </div>
    						</div>
    					</Col>
    				</Row>
    				<button className="pull-right more-btn">MORE +</button>
    			</Grid>
    		</div>
    		<div className="pro-bottom">
                <div className="img-cont">
                    <img src={p1} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p2} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p3} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p4} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p5} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p6} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
                <div className="img-cont">
                    <img src={p7} />
                    <div className="text">
                        <p>ACNE STUDIOS</p>
                        <p>Canada Cashmere Scarf</p>
                        <p>¥ 2,300</p>
                    </div>
                </div>
            </div>
    	</div>
    );
  }
};