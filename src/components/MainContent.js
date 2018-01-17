import React, {Component} from 'react'
import Footer from "./sections/FooterSection";
import ProfileSection from "./sections/ProfileSection";
import PortfolioSection from "./sections/PortfolioSection";
import PersonalProjectSection from "./sections/PersonalProjectSection";
import CarDiagSection from "./sections/CarDiagSection";
import ContactSection from "./sections/ContactSection";
import ComingSoonSection from "./sections/ComingSoonSection";
import {BrowserRouter as Router, Route} from 'react-router-dom';

let routeList = require('./route/routes');

export default class MainContent extends  Component{
    render(){
        return (
            <Router>
            <div className="">

                <div className="main-pager">
                    <Route exact path="/" component={ComingSoonSection}/>
                    <Route path={routeList.home} component={ComingSoonSection}/>
                    <Route path={routeList.profile} component={ProfileSection}/>
                    <Route path={routeList.contact} component={ContactSection}/>
                    <Route path={routeList.portfolio} component={PortfolioSection}/>
                    <Route path={routeList.projects} component={PersonalProjectSection}/>
                    <Route path={routeList.carDiagnostics} component={CarDiagSection}/>
               </div>

                 <Footer/>
            </div>
            </Router>
        )
    }
}