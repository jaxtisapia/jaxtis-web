import React, { Component } from 'react';
import jaxtisLogo from './assets/img/jaxtis-logo.png'
import userIcon from './assets/img/icon-header-01.png'
import cartIcon from './assets/img/icon-header-02.png'

import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/css-hamburgers/hamburgers.css'
import './assets/css/main.css'
import './assets/css/util.css'
import './App.css';
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div className="">
       <body className="animsition">

          {/* Header  */}
          <header className="header3">
              {/* Header desktop  */}
              <div className="container-menu-header-v3">
                  <div className="wrap_header3 p-t-74">
                      {/* Logo  */}
                      <a href="" className="logo3">
                          <img src={jaxtisLogo} alt="IMG-LOGO"/>
                      </a>

                      {/* Header Icon  */}
                      <div className="header-icons3 p-t-38 p-b-60 p-l-8">
                          <a href="" className="header-wrapicon1 dis-block">
                              <img src={userIcon} className="header-icon1" alt="ICON"/>
                          </a>

                          <span className="linedivide1"/>

                          <div className="header-wrapicon2">
                              <img src={cartIcon} className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                                  <span className="header-icons-noti">0</span>
                          </div>
                      </div>

                      {/* Menu  */}
                      <div className="wrap_menu">
                          <nav className="menu">
                              <ul className="main_menu">
                                  <li>
                                      <a href="">Home</a>
                                  </li>

                                  <li>
                                      <a href="">Personal Projects</a>
                                      <ul className="sub_menu">
                                          <li><a href="">Bet Prediction Project</a></li>
                                          <li><a href="">Live Lottery App</a></li>
                                          <li><a href="">Community Based Social Media Platform</a></li>
                                          <li><a href="">Africa WebApps Vulnerability Research</a></li>
                                      </ul>
                                  </li>

                                  <li>
                                      <a href="">Portfolio</a>
                                  </li>

                                  <li>
                                      <a href="">My Profile</a>
                                  </li>

                                  <li className="sale-noti">
                                      <a href="">Car Diagnostics (NEW)</a>
                                  </li>

                                  <li>
                                      <a href="">Send me a message</a>
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

                      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
					<span className="hamburger-box">
						<span className="hamburger-inner"/>
					</span>
                      </div>
                  </div>
              </div>

              {/* Menu Mobile  */}
              <div className="wrap-side-menu" >
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
                              <a href="">Features</a>
                          </li>

                          <li className="item-menu-mobile">
                              <a href="">Contact Us</a>
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

          </body>
      </div>
    );
  }
}

export default App;
