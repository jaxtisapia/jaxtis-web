import React, { Component } from 'react'
import { Link } from 'react-router-dom';

let webConfig = require('../../config/profile').configuration;

let routeList = require('../route/routes');

export default class HomeSection extends Component {
	render() {
		return (
			<section className='uk-section'>
				<div className="uk-container uk-container-small">
					
					<div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column'>
						
						<h2 className='name-text-greeting uk-visible@l uk-text-muted'>Hey there,</h2>
						
						<div className='uk-flex uk-flex-center uk-flex-column'>
							<h1 className='name-text uk-text-small@s uk-flex uk-text-center uk-flex-column'>
								I'm Justice Appiah
								
								<span className="uk-text-center text-description">
									 Full-Stack Engineer with over 5 years of experience in React JS, Express JS and Android (Java).
									<br/>
									Strong TDD Advocate, and a SOLID Evangelist.
								</span>
							</h1>
							
							<span className="uk-text-center text-description">
								Occasionally dabble in Vue JS, Meteor, LoopBack JS and Java Springboot.
							</span>
						</div>
						
						<div className='uk-flex uk-flex-row uk-flex-wrap uk-flex-center uk-margin uk-margin-large-top'>
							{ webConfig.abilityTags.map(function(ability, i) {
								return <p className='ability-tag uk-flex uk-flex-middle uk-flex-center' key={ i }>{ ability }</p>
							}) }
						
						</div>
						
						<div className='uk-margin-medium-top'>
							<ul className="uk-breadcrumb">
								<li><Link to={ routeList.portfolio }>My Portfolio</Link></li>
								<li><Link to={ routeList.contact }>Make enquiries</Link></li>
								<li><Link to={ routeList.profile }>View my profile</Link></li>
								<li><Link to={ routeList.projects }>Checkout my private projects</Link></li>
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