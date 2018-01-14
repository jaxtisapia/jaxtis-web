import React, {Component} from 'react'
import Footer from "./Footer";

export default class MainContent extends  Component{
    render(){
        return (
            <div className="container1-page">
                <div className="main-pager"></div>

                 <Footer/>
            </div>
        )
    }
}