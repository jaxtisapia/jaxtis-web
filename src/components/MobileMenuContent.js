import React, {Component} from 'react'
import {Link} from "react-router-dom";

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
                        <a href="">Home</a>
                    </li>

                    <li className="item-menu-mobile">
                        <a href="">Products</a>
                    </li>

                    <li className="item-menu-mobile">
                        <a href="">Quality Assurance</a>
                    </li>

                    <li className="item-menu-mobile">
                        <a href="">Discount</a>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={'features'}>Features</Link>
                    </li>

                    <li className="item-menu-mobile">
                        <Link to={'contact'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        )

    }
}