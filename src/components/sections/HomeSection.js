import React, {Component} from 'react'
import {Link} from "react-router-dom";
let webConfig = require('../../config/profile').configuration;

let routeList = require('../route/routes');

export default class HomeSection extends Component{
    render(){
        return (
            <section className='uk-section'>
                <div className="uk-container uk-container-small">

                    <div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column'>
                        <h2 className='name-text-greeting uk-flex uk-flex-center uk-visible@l uk-text-muted'>Hey there,</h2>

                        <div className='uk-flex uk-flex-center'>
                        <h2 className='name-text uk-text-small@s'> I'm Justice Appiah</h2>
                        </div>

                        <div className='uk-flex uk-flex-row uk-flex-wrap uk-flex-center'>
                        { webConfig.abilityTags.map(function (ability, i) {
                                return <p className='ability-tag uk-flex uk-flex-middle uk-flex-center' key={i}>{ability}</p>
                        })}

                        </div>

                        <div className='uk-margin-medium-top'>
                            <ul className="uk-breadcrumb">
                                <li><Link to={routeList.portfolio}>My Portfolio</Link></li>
                                <li><Link to={routeList.contact}>Make enquiries</Link></li>
                                <li><Link to={routeList.profile}>View my profile</Link></li>
                                <li><Link to={routeList.projects}>Checkout my private projects</Link></li>
                            </ul>
                        </div>


                        <div className='uk-margin-large-top'>
                        <p>Email: jaxtis.apia@gmail.com</p>
                        <p>Phone: +233 - 27 - 892 - 5201</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}