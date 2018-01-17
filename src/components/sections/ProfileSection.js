import React, {Component} from 'react';
import EducationItem from "../item/ProfileItem";
let webConfiguration = require('../../config/profile').configuration;

export default class ProfileSection extends Component{

    render(){
        return (
            <section id="profile">
                <ul uk-accordion>
                    <li>
                        <a className="uk-accordion-title" href="#">Education</a>
                        {webConfiguration.profile.education.map(function (ed) {
                            return <EducationItem title={ed.institution} descriptions={[ed.course, ed.period]}/>
                        })}
                    </li>

                    <li>
                        <a className="uk-accordion-title" href="#">Experience</a>
                        <div className="uk-accordion-content">
                            {webConfiguration.profile.experience.map(function (ex) {
                                return <EducationItem title={ex.institution} descriptions={ex.descriptions}/>
                            })}
                        </div>
                    </li>

                    <li>
                        <a className="uk-accordion-title" href="#">Skills and other Interests</a>
                        <div className="uk-accordion-content">
                            {webConfiguration.profile.skill_interest.map(function (si) {
                                return <EducationItem {...si}/>
                            })}
                        </div>
                    </li>

                </ul>
            </section>
        )
    }
}