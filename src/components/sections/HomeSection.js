import React, {Component} from 'react'
let webConfig = require('../../config/profile').configuration;

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
                                <li><a href="#">My Portfolio</a></li>
                                <li><a href="#">Make enquiries</a></li>
                                <li><a href="#">View my profile</a></li>
                                <li><a href="#">Checkout my private projects</a></li>
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