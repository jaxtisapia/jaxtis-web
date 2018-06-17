import React, {Component} from 'react'
import {Link} from "react-router-dom";
let routeList = require('../route/routes');
let webConfig = require('../../config/profile').configuration;


export default class MenuContent extends Component{
    render(){
        return (
            <div className="wrap_menu">
                <nav className="menu">
                    <ul className="main_menu">
                        <li>
                            <Link to={routeList.home}>Home</Link>
                        </li>

                        <li>
                            <Link to={routeList.projects}>Personal Projects</Link>
                            <ul className="sub_menu">

                                {webConfig.personalProjects.map(function (project) {
                                    return  <li key={project.id}><Link to={`${project.id}`}>{project.title}</Link></li>
                                })}

                            </ul>
                        </li>

                        {/*<li>*/}
                            {/*<Link to={routeList.research}>Cybersecurity Research</Link>*/}
                        {/*</li>*/}

                        <li>
                            <Link to={routeList.portfolio}>Portfolio</Link>
                        </li>

                        <li>
                            <Link to={routeList.profile}>My Profile</Link>
                        </li>

                        <li className="sale-noti">
                            <Link to={routeList.carDiagnostics}>Car Diagnostics (NEW)</Link>
                        </li>

                        <li>
                            <Link to={routeList.contact}>Send me a message</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}