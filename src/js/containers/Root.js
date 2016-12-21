import React, { Component } from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { CONFIG } from '../constants/Config.js'
// import NProgress from 'nprogress'

// import Menu from '../components/Menu.js';
import Template from './Template'
import Home from './Home'
import Product from './Product'

import '../../css/reset.scss'
// import '../../css/fonts.scss'
import '../../css/Template.scss'
import '../../css/home.scss'
import '../../css/product.scss';
// import '../../css/nprogress.scss';
// import '../../css/zenburn.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })


const routes = (
  <Route path="/" component={Template}>
    <IndexRoute component={Home} />
    <Route path="product" component={Product} />
    <Route path="home" component={Home} />
    {/*<IndexRoute component={Menu} />
    <Route path="all" getComponent={All} />
    <Route path="archive" getComponent={Archive} />
    <Route path="tags" getComponent={Tags} />
    <Route path="post/:id" getComponent={Post} />*/}
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};