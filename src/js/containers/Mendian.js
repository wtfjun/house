import React, { Component } from 'react';
import $ from 'jquery'

import Q from '../../img/q.jpg'
import W from '../../img/w.jpg'
import E from '../../img/e.jpg'
import R from '../../img/r.jpg'

export default class Mendian extends Component {
    componentDidMount() {
        $('.tab li').click(function(event) {
            /* Act on the event */
            let c = $(this).text()
            $('.'+c).show().siblings().hide()
            
        });
    }
      render() {
        return (
                <div className="mendian">
                    <ul className="tab">
                        <li>wall1</li>
                        <li>wall2</li>
                    </ul>
                    <br/ >
                    <div className="tab-img">
                        <ul className="wall1">
                            <li>
                                <img src={Q} />
                                <br/ >
                                Birdbranch Hand 
                            </li>
                            <li>
                                <img src={W} />
                                <br/ >
                                Birdbranch Hand 
                            </li>
                        </ul>
                        <ul className="wall2">
                            <li>
                                <img src={E} />
                                <br/ >
                                Birdbranch Hand 
                            </li>
                            <li>
                                <img src={Q} />
                                <br/ >
                                Birdbranch Hand 
                            </li>
                        </ul>
                    </div>
                </div>
        );
      }
};