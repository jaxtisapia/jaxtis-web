import React, {Component} from 'react'
import PortfolioItem from "../item/PortfolioItem";
let webConfiguration = require('../../config/profile').configuration;


export default class PortfolioSection extends Component{
    render(){
        return (
            <section  className='uk-section' id='portfolio'>
                <div className="uk-container uk-container-small">

                    <h3 className='uk-text-uppercase'>My Portfolio</h3>
                    <p>Not all completed works can be placed in portfolio. Many projects, according to contract, must not be attached to my personal portfolio. However, I have a few volunteer project(s) in my good books</p>
                    <hr className="uk-divider-icon"/>

                    <div className=''>

                {webConfiguration.portfolio.map(function (pf) {
                    return <PortfolioItem {...pf}/>
                })}

                    </div>

                </div>
            </section>
        )
    }
}