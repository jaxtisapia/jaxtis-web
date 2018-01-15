import React, {Component} from 'react'
import Footer from "./FooterSection";
import ProfileSection from "./ProfileSection";
import PortfolioSection from "./PortfolioSection";

export default class MainContent extends  Component{
    render(){
        return (
            <div className="container1-page">

                <div className="main-pager">
                    {/*<ProfileSection/>*/}
                    <PortfolioSection/>
               </div>

                 <Footer/>
            </div>
        )
    }
}