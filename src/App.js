import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
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
import MobileMenuContent from "./components/MobileMenuContent";
import MenuContent from "./components/sections/MenuContent";

let webConfig = require('./config/profile').configuration;
let routeList = require('./components/route/routes');

class App extends Component {

    constructor(props) {
        super(props);
        this.toggleMobileViewMenu = this.toggleMobileViewMenu.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.state = {hamburgerActive: false, windowWidth: 0}
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({windowWidth: window.innerWidth});
        console.log(this.state.windowWidth)
    }

    toggleMobileViewMenu() {
        this.setState({hamburgerActive: !this.state.hamburgerActive})
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

                                <a href="" className="logo3">
                                    <img className='uk-flex uk-flex-center' src={jaxtisLogo} alt="IMG-LOGO"/>
                                </a>

                                <div className="uk-flex uk-flex-center header-icons3 p-t-38 p-b-60 p-l-8">
                                    <Link to={routeList.profile} className="header-wrapicon1 dis-block"
                                          title="View my Profile" uk-tooltip='true'>
                                        <img src={userIcon} className="header-icon1" alt="ICON"/>
                                    </Link>

                                    <span className="linedivide1"/>

                                    <div className="header-wrapicon2"
                                         title={`${webConfig.personalProjects.length} incomplete personal projects`}
                                         uk-tooltip="true">
                                        <Link to={routeList.projects}>
                                            <img src={cartIcon} className="header-icon1 js-show-header-dropdown"
                                                 alt="ICON"/>
                                            <span
                                                className="header-icons-noti">{webConfig.personalProjects.length}</span>
                                        </Link>
                                    </div>

                                </div>

                                {/* Menu  */}
                                <MenuContent/>

                            </div>

                            <div className="bottombar flex-col-c p-b-65">

                                <div>
                                    <p>jaxtis.apia@gmail.com</p>
                                    <p>+233 27 892 5201</p>
                                </div>

                            </div>
                        </div>
                        {/* End of Header desktop  */}


                        {/* Header Mobile  */}
                        <div className="wrap_header_mobile">

                            <a href="" className="logo-mobile">
                                <img src={jaxtisLogo} alt="IMG-LOGO"/>
                            </a>

                            {/* Button show menu  */}
                            <div className="btn-show-menu">
                                {/* Header Icon mobile  */}
                                <div className="header-icons-mobile">
                                    <Link to={routeList.profile} className="header-wrapicon1 dis-block"
                                          title="View my Profile" uk-tooltip='true'>
                                        <img src={userIcon} className="header-icon1" alt="ICON"/>
                                    </Link>

                                    <span className="linedivide2"/>

                                    <div className="header-wrapicon2"
                                         title={`${webConfig.personalProjects.length} incomplete personal projects`}
                                         uk-tooltip="true">
                                        <Link to={routeList.projects}>
                                            <img src={cartIcon} className="header-icon1 js-show-header-dropdown"
                                                 alt="ICON"/>
                                            <span
                                                className="header-icons-noti">{webConfig.personalProjects.length}</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className='btn-show-menu-mobile'>
                                    <Hamburger active={this.state.hamburgerActive} type="slider"
                                               onClick={this.toggleMobileViewMenu}
                                    />
                                </div>

                            </div>
                        </div>
                        {/* End of Header Mobile  */}

                        {/* Menu Mobile - */}
                        <div
                            className={`wrap-side-menu ${((this.state.hamburgerActive && this.state.windowWidth <= 992) ? 'mobile-menu-active' : 'mobile-menu-inactive')}`}>
                            <MobileMenuContent/>
                        </div>
                        {/* End of Menu Mobile - */}

                    </header>

                    <MainContent/>

                </div>

            </Router>
        );
    }
}

export default App;
