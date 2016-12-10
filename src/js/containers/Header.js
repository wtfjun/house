import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import { Icon } from 'antd'
// const Option = Select.Option

import LOGO from '../../img/logo.svg'

export default class Header extends Component {
  componentDidMount() {
    $('.mb-btn').click(function(event) {
      /* Act on the event */
      $('.mb-nav').css('height', '100%');
      $('.mb-nav ul').addClass('active')
      $(this).hide()
      $('.close-mb-nav').show()
    });
    $('.close-mb-nav').click(function(event) {
      /* Act on the event */
      $('.mb-nav ul').removeClass('active')
      $(this).hide()
      $('.mb-btn').show()
      var t = setTimeout(function() {
        $('.mb-nav').css('height', '50px');
      }, 400)
     
    });
  }
  render() {
    return (
      <div>
      <div className="mb-nav">
        <ul>
          <li role="presentation"><Link to="/subpage/cyprus">主页</Link></li>
          <li role="presentation"><Link to="/properties">关于产品</Link></li>
          <li role="presentation"><Link to="/subpage/Buying Process">门店</Link></li>
          <li role="presentation"><Link to="/subpage/financing">联系我们</Link></li>
          <li role="presentation"><Link to="/subpage/PERMANENT RESIDENCY">关于我们</Link></li>
        </ul>
      </div>
      <header>
        <div className="header-top">
          <Navbar.Toggle className="mb-btn" />
          <span className="close-mb-nav"><Icon type="close" /></span>
          <img src={LOGO} />
        </div>
        <Navbar collapseOnSelect className="pc-nav">
          <Navbar.Collapse>
            <Nav className="bootstrap-nav">
              <li role="presentation"><Link to="/subpage/cyprus">主页</Link></li>
              <li role="presentation"><Link to="/properties">关于产品</Link></li>
              <li role="presentation"><Link to="/subpage/Buying Process">门店</Link></li>
              <li role="presentation"><Link to="/subpage/financing">联系我们</Link></li>
              <li role="presentation"><Link to="/subpage/PERMANENT RESIDENCY">关于我们</Link></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
    );
  }
};