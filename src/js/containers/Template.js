import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CONFIG } from '../constants/Config'
import Header from './Header'
import Footer from './Footer'

class Template extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main">
       <Header />
       { this.props.children }
       <Footer />
      </div>
    );
  }
};

export default Template;