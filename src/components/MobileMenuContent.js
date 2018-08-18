import React, {Component} from 'react'
import {Link} from "react-router-dom";

let routeList = require('./route/routes');

export default class MobileMenuContent extends Component{
    render(){
        return (
            <nav className="side-menu">
                <ul className="main-menu">
                    <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							jaxtis.apia@gmail.com
						</span>
                    </li>
                    <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							+233 27 892 5201
						</span>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={routeList.home}>Home</Link>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={routeList.projects}>Personal Projects</Link>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={routeList.portfolio}>Portfolio</Link>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={routeList.profile}>My Profile</Link>
                    </li>

                    {/*<li className="item-menu-mobile">*/}
                        {/*<Link to={routeList.carDiagnostics}>Car Diagnostics (NEW)</Link>*/}
                    {/*</li>*/}

                    <li className="item-menu-mobile">
                        <Link to={routeList.contact}>Send me a message</Link>
                    </li>
                </ul>
            </nav>
        )

    }
}