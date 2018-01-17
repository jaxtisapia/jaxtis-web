import React, {Component} from 'react'
import PersonalProjectItem from "../item/PersonalProjectItem";
let webConfig = require('../../config/profile').configuration;

export default class PersonalProjectSection extends Component{
    render(){
        return (
            <section id='personal-projects'>

                {webConfig.personalProjects.map(function (project) {
                    return <PersonalProjectItem {...project}/>
                })}
            </section>
        )
    }
}