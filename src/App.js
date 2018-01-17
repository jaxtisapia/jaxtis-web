import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import jaxtisLogo from './assets/img/jaxtis-logo.png'
import userIcon from './assets/img/icon-header-01.png'
import cartIcon from './assets/img/icon-header-02.png'

import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/css-hamburgers/hamburgers.css'
import './assets/css/main.css'
import './assets/css/uikit.min.css'
import './assets/css/util.css'
import './App.css';
import MainContent from "./components/MainContent";
import Hamburger from "react-hamburgers";

let webConfig = require('./config/profile').configuration;
let routeList = require('./components/route/routes');

class App extends Component {

    constructor(props){
        super(props);
        this.toggleMobileViewMenu = this.toggleMobileViewMenu.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.state = {hamburgerActive:false, windowWidth:0}
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth });
        console.log(this.state.windowWidth)
    }

    toggleMobileViewMenu(){
        this.setState({ hamburgerActive: !this.state.hamburgerActive })
    }

  render() {
    return (
        <Router>
      <div className="">

          {/* Header  */}
          <header className="header3">
              {/* Header desktop  */}
              <div className="container-menu-header-v3">
                  <div className="wrap_header3 p-t-74">
                      {/* Logo  */}
                      <a href="" className="logo3">
                          <img className='uk-flex uk-flex-center' src={jaxtisLogo} alt="IMG-LOGO"/>
                      </a>

                      {/* Header Icon  */}
                      <div className="uk-flex uk-flex-center header-icons3 p-t-38 p-b-60 p-l-8">
                          <a href="" className="header-wrapicon1 dis-block" title="View my Profile" uk-tooltip='true'>
                              <img src={userIcon} className="header-icon1" alt="ICON"/>
                          </a>

                          <span className="linedivide1"/>

                          <div className="header-wrapicon2" title={`${webConfig.personalProjects.length} incomplete personal projects`} uk-tooltip="true">
                              <img src={cartIcon} className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                                  <span className="header-icons-noti">{webConfig.personalProjects.length}</span>
                          </div>
                      </div>

                      {/* Menu  */}
                      <div className="wrap_menu">
                          <nav className="menu">
                              <ul className="main_menu">
                                  <li>
                                      <Link to={routeList.home}>Home</Link>
                                  </li>

                                  <li>
                                      <Link to={routeList.projects}>Personal Projects</Link>
                                      <ul className="sub_menu">

                                          {webConfig.personalProjects.map(function (project) {
                                              return  <li key={project.id}><Link to={`${project.id}`}>{project.title}</Link></li>
                                          })}

                                      </ul>
                                  </li>

                                  <li>
                                      <Link to={routeList.portfolio}>Portfolio</Link>
                                  </li>

                                  <li><Link to={routeList.profile}>My Profile</Link>
                                  </li>

                                  <li className="sale-noti">
                                      <Link to={routeList.carDiagnostics}>Car Diagnostics (NEW)</Link>
                                  </li>

                                  <li>
                                      <Link to={routeList.contact}>Send me a message</Link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>

                  <div className="bottombar flex-col-c p-b-65">

                      <div>
                          <p>jaxtis.apia@gmail.com</p>
                          <p>+233 27 892 5201</p>
                      </div>

                  </div>
              </div>

              {/* Header Mobile  */}
              <div className="wrap_header_mobile">
                  {/* Logo moblie  */}
                  <a href="" className="logo-mobile">
                      <img src={jaxtisLogo} alt="IMG-LOGO"/>
                  </a>

                  {/* Button show menu  */}
                  <div className="btn-show-menu">
                      {/* Header Icon mobile  */}
                      <div className="header-icons-mobile">
                          <a href="" className="header-wrapicon1 dis-block">
                              <img src={userIcon} className="header-icon1" alt="ICON"/>
                          </a>

                          <span className="linedivide2"/>

                          <div className="header-wrapicon2">
                              <img src={cartIcon} className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                                  <span className="header-icons-noti">0</span>
                          </div>
                      </div>

                      {/*<div className="btn-show-menu-mobile hamburger hamburger--squeeze">*/}
					{/*<span className="hamburger-box">*/}
						{/*<span className="hamburger-inner"/>*/}
					{/*</span>*/}
                      {/*</div>*/}

                      <div className='btn-show-menu-mobile'>
                          <Hamburger active={this.state.hamburgerActive}  type="slider"
                                     onClick={this.toggleMobileViewMenu}
                          />
                      </div>

                  </div>
              </div>

              {/* Menu Mobile  */}
              <div className={`wrap-side-menu ${((this.state.hamburgerActive && this.state.windowWidth <= 992) ? 'mobile-menu-active' : 'mobile-menu-inactive')}`} >
                  <nav className="side-menu">
                      <ul className="main-menu">
                          <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							jaxtis.apia@gmail.com
						</span>
                          </li>
                          <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							+233 27 892 5201
						</span>
                          </li>

                          <li className="item-menu-mobile">
                              <a href="">Home</a>
                          </li>

                          <li className="item-menu-mobile">
                              <a href="">Products</a>
                          </li>

                          <li className="item-menu-mobile">
                              <a href="">Quality Assurance</a>
                          </li>

                          <li className="item-menu-mobile">
                              <a href="">Discount</a>
                          </li>

                          <li className="item-menu-mobile">
                             <Link to={'features'}>Features</Link>
                          </li>

                          <li className="item-menu-mobile">
                              <Link to={'contact'}>Contact Us</Link>
                          </li>
                      </ul>
                  </nav>
              </div>
          </header>

          <MainContent/>

          {/* Back to top  */}
          <div className="btn-back-to-top bg0-hov" id="myBtn">
		<span className="symbol-btn-back-to-top">
			<i className="fa fa-angle-double-up" aria-hidden="true"/>
		</span>
          </div>

          {/* Container Selection1  */}
          <div id="dropDownSelect1"/>

          </div>
        </Router>
    );
  }
}

export default App;
