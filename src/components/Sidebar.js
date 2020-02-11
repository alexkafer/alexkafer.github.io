import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from "gatsby"

import avatar from '../assets/images/profilepicture.jpg';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: '/#about' },
        { content: 'Experience', href: '/#experience' },
        { content: 'Education', href: '/#education' },
        { content: 'Coursework', href: '/coursework' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            Alex Kafer  
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Link  className="nav-link" to={href}>{content}</Link>
                </li>
              );
            })}
          </Scrollspy>
          
        </div>
      </nav>
    );
  }
}

export default Sidebar;
