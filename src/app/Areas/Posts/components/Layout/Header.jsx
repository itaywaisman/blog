import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  render() {
    return (
      <header className="container">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo waves-effect waves-teal" style={{fontWeight:'200'}}>
              <span  className="teal-text text-lighten-3">{'<'}</span>
              <strong className="teal-text text-darken-1" style={{fontWeight:'500'}}>Itay Waisman</strong>
              <span  className="teal-text text-lighten-3">{' />'}</span>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="teal-text text-darken-1" href="sass.html">GitHub</a></li>
              <li><a className="teal-text text-darken-1"  href="badges.html">LinkedIn</a></li>
              <li><a className="teal-text text-darken-1"  href="badges.html">RSS Feed</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
