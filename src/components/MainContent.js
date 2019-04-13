import React, {Component} from 'react'
import Footer from "./sections/FooterSection";
import ProfileSection from "./sections/ProfileSection";
import PortfolioSection from "./sections/PortfolioSection";
import PersonalProjectSection from "./sections/PersonalProjectSection";
import CarDiagSection from "./sections/CarDiagSection";
import ContactSection from "./sections/ContactSection";
import ComingSoonSection from "./sections/ComingSoonSection";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeSection from "./sections/HomeSection";
import Page404Section from "./sections/Page404Section";
import ResearchSection from "./sections/ResearchSection";

let routeList = require('./route/routes');

export default class MainContent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container1-page">

                <div className='main-pager'>
                    <Switch>
                        <Route exact path="/" component={HomeSection}/>
                        <Route path={`/${routeList.home}`} component={HomeSection}/>
                        <Route path={`/${routeList.profile}`} component={ProfileSection}/>
                        <Route path={`/${routeList.contact}`} component={ContactSection}/>
                        <Route path={`/${routeList.projects}`} component={PersonalProjectSection}/>
                        <Route path={`/${routeList.portfolio}`} component={PortfolioSection}/>

                        <Route path='*' exact={true} component={Page404Section}/>
                    </Switch>

                </div>

                <Footer/>
            </div>
        )
    }
}