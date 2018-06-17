import React, {Component} from 'react'
import ResearchItem from "../item/ResearchItem";

let webConfig = require('../../config/profile').configuration;


export default class ResearchSection extends Component{
    render(){
        return(
            <section className='uk-section'>

                <div className="uk-container uk-container-small">

                    <h3 className='uk-text-uppercase uk-text-center'>Cybersecurity Reviews</h3>


                    <div className="uk-flex  uk-flex-row uk-flex-wrap-around uk-flex-wrap uk-flex-center">

                        {webConfig.research.map(function (project) {
                            return <ResearchItem {...project}/>
                        })}
                    </div>

                </div>

            </section>
        )
    }
}