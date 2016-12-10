import React, { Component } from 'react';
import { Carousel } from 'antd';
import CAROUSEL from '../../img/carousel1.jpg'
import '../../css/AntdCarousel.scss'

export default class AntdCarousel extends Component {
  render() {
    return (
			<Carousel className="antd-carousel">
		    <div><img src={CAROUSEL} /></div>
		    <div><h3>2</h3></div>
		    <div><h3>3</h3></div>
		    <div><h3>4</h3></div>
		  </Carousel>
    );
  }
};