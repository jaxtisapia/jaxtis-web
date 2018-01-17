import React, {Component} from 'react'
import PortfolioItem from "../item/PortfolioItem";
let webConfiguration = require('../../config/profile').configuration;


export default class PortfolioSection extends Component{
    render(){
        return (
            <section id='portfolio'>

                {webConfiguration.portfolio.map(function (pf) {
                    return <PortfolioItem {...pf}/>
                })}

            </section>
        )
    }
}