import React, {Component} from 'react'
import Footer from "./sections/FooterSection";
import ProfileSection from "./sections/ProfileSection";
import PortfolioSection from "./sections/PortfolioSection";
import PersonalProjectSection from "./sections/PersonalProjectSection";
import CarDiagSection from "./sections/CarDiagSection";
import ContactSection from "./sections/ContactSection";
import ComingSoonSection from "./sections/ComingSoonSection";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeSection from "./sections/HomeSection";

let routeList = require('./route/routes');

export default class MainContent extends  Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="container1-page">

                <div className='main-pager'>
                <Route exact path="/" component={HomeSection}/>
                <Route path={`/${routeList.home}`} component={HomeSection} />
                <Route path={`/${routeList.profile}`} component={ProfileSection} />
                <Route path={`/${routeList.contact}`} component={ContactSection} />
                <Route path={`/${routeList.carDiagnostics}`} component={CarDiagSection} />
                <Route path={`/${routeList.projects}`} component={PersonalProjectSection} />
                <Route path={`/${routeList.portfolio}`} component={PortfolioSection} />
                </div>

                <Footer/>
            </div>
        )
    }
}