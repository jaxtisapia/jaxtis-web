let weriseImage = require('../assets/img/werise-portfolio.jpg');
let surgeImage = require('../assets/img/surgeGhanaBanner.jpg');
let prestigeImage = require('../assets/img/prestigeBanner.jpg');
let funnyOrNotBanner = require('../assets/img/funnyOrNotBanner.jpg');
let gatsbyBanner = require('../assets/img/gatsbyBanner.jpg');
let tickethouseBanner = require('../assets/img/tickethouseBanner.jpg');
let totoBanner = require('../assets/img/totoBanner.jpg');

let configuration = {
	profile : {
		education : [
			{
				institution : 'Kwame Nkrumah University of Science and Technology, Kumasi',
				course : 'Bachelor of Science (BSc.) Computer Engineering',
				period : '2013 - 2017'
			},
			{
				institution : 'Prempeh College, Kumasi',
				course : 'General Science',
				period : '2009 - 2013'
			}],
		experience : [
			{
				institution : 'Planned Parenthood Assocation of Ghana',
				descriptions : ['National Service Personnel - Volunteer',
					'September 2017 - Present',
					'Responsible for grouping and analysis of client data',
					'Social outreach and peer counselling on sexuality and related discussions']
			},
			{
				institution : 'Ghana Robotics Academy Foundation',
				descriptions : ['Robotics Trainer/Coach',
					'April 2014 - Present',
					'Helping young students in elementary up to Senior High School, gain knowledge of robotics and its powerful applications in Ghana through the Okoree Initiative',
					'Trained four Senior High Schools for Robotics Inspired Science Education (RISE) competitions',
					'Trained Junior High Students for the first time to defeat Senior High Students in the national Robotics Inspired Science Education (RISE) competition in 2014, 2015 and 2016']
			},
			{
				institution : 'ASQII Incorporated, Kumasi',
				descriptions : ['UI - UX Developer',
					'May 2016 - January 2018',
					'Responsible for modelling mobile and web apps prior to development',
					'Responsible for researching best user experiences tailored to suit any software project',
					'Creating animation and software graphic components for best user experience']
			},
			{
				institution : 'Software and Database Administration',
				descriptions : ['Opoku Ware Basic School, Kumasi',
					'May 2014 - Nov 2016',
					'Built an Examination Records Management Software that automatically handles rankings and promotions of students',
					'Currently adding extra sub-features to the system and strengthening data security']
			},
			{
				institution : 'Front End Developer - Android Native',
				descriptions : ['The Gatsby Magazine - Ghana (Available only on Play Store)',
					'Sept 2016 - Sept 2016',
					'Development of Android app with offline and online sync states']
			},
			{
				institution : 'BackEnd Developer - Android Native',
				descriptions : ['The Gatsby Magazine',
					'Sept 2016 - Sept 2016',
					'Developed REST API for frontend clients to consume and receive magazine content',
					'Main tools used were Python, Django, Postgres']
			},
		],
		skill_interest : [
			{
				title : 'Personal Skills',
				descriptions : ['Quick Learner, Creative, Team-Leader, Team-Player']
			},
			{
				title : 'Interests',
				descriptions : ['Cyber Security, Programming, Graphic Designing, Robotics']
			},
		]
	},
	research : [
		{
			id : 'debit-card-api-review',
			title : 'Dangers of an exposed credit-card processing api',
			image : '',
			descriptions : [
				'Before you read this, just understand that I do not seek to refer to any company or individual directly. ' +
				'This piece is just an analysis of the discovery of a leaked credit-debit card processing api (or endpoint), and focus' +
				' on how this access can be of help to any malicious party',
				'Have you ever wondered why most credit-debit card payment processors do not give direct access to api endpoints?',
				'Have you realised most payment processors rather give you links to web pages; which then gives customers direct access to their systems to make payments',
				'However, in a case where i can make simple api calls to a payment-processor, I should have a lot of advantages',
				'Now stop imagining, lemme take you through this amazing possibility'
			],
			link : 'https://github.com/jaxtisapia/dangers-of-an-exposed-credit-card-processing-api'
		}
	],
	portfolio : [
		{
			title : 'WeRise Foundation - Ghana (Company Website)',
			description : 'WERISE Foundation is a Non-Governmental Organisation that advocates for persons with disabilities, kids with special needs and orphans, by assisting them with the necessary resources, to create an all inclusive environment.',
			link : 'http://www.werisefoundationgh.com/',
			image : weriseImage
		},
		{
			title : 'Prestige Donors Club - Web App',
			description : 'Prestige Donors Club (PDC) is a popular donation platform in Ghana (among elites in the banking sector). The platform is a pool that collects funds from its club members and disburses funds among club members accordingly. Project included a web app and an admin panel interfaced by a single backend developed with node js. All developments were  exclusively developed ground up under my supervision and direct involvement',
			link : 'http://prestigedonors.club',
			image : prestigeImage
		}, {
			title : 'SurgeGhana - Mobile App, Web App and Website',
			description : 'SurgeGhana (SurgeGH) is a donation platform. The platform basically links donors in cyclical returns. Project included a website, complex web applications and mobile application, which were all exclusively developed ground up under my supervision and direct involvement',
			link : null,
			image : surgeImage
		},
		{
			title : 'FunnyOrNot - Mobile App, UI/UX Design',
			description : 'FunnyOrNot is a joke sharing app. It aims to gather all of the world’s jokes, in whatever format; images, videos, soundbites, and text, into one simple social app. I handled extreme responsibilities of UI/UX design.',
			link : 'https://play.google.com/store/apps/details?id=com.funnyornot',
			image : funnyOrNotBanner
		},
		{
			title : 'ToTo App - Backend Developer',
			description : 'ToTo is a joke sharing mobile app. It is exclusively supported only in French',
			link : 'https://play.google.com/store/apps/details?id=com.yannick.opodame.toto',
			image : totoBanner
		},
		{
			title : 'Gatsby Magazine - Mobile App, Web',
			description : 'The Gatsby Magazine is a unique online magazine that has captured the hearts of students as it contains everything that would prepare you for college academically, socially, morally, etc; including Fashion, Technology, and Lifestyle on campus.',
			link : 'https://play.google.com/store/apps/details?id=com.thegatsbymagazine',
			image : gatsbyBanner
		},
		{
			title : 'School Management System (Opoku Ware Junior High School, Ghana) - Desktop App',
			description : 'An Examination Records Management Software that automatically handles rankings and promotions of students. Handles complex management of human resource and students in a simple offline database',
			link : null,
		},
		{
			title : 'TicketHouse Ghana - UI Redesign',
			description : 'TicketHouse is a ticket purchasing platform. Know all the events happening around you and when and where they are happening. Events such as concerts, religious, sports, theater and movies in cinemas. THIS PROJECT HAS UNDERGONE VARIOUS SHIFTS IN INTERFACE DESIGN FROM OTHER UI DESIGNERS, AND MIGHT NOT BE A GOOD PORTFOLIO RECORD FOR ME.',
			link : 'https://play.google.com/store/apps/details?id=com.tickethousegh.app',
			image : tickethouseBanner
		},
	],
	personalProjects : [
		{
			id : 'bet-predictor',
			title : 'Bet Prediction Project',
			image : '',
			descriptions : ['I\'ve been gathering data of all matches in different leagues in different countries for the past 5 months - About 15,000 matches',
				'As match data keeps adding up automatically, specific bet odds related to the match are also stored',
				'Results of bets with relation to every match is also automatically pulled and updated by bots',
				'Hidden within this data are lots of precious gems. Already found one of such gems - xD'
			],
			link : 'https://github.com/jaxtisapia/sports-bet-data-analysis'
		},
		{
			id : 'live-lottery',
			title : 'Decentralised Live Lottery',
			image : '',
			descriptions : ['More spin-and-win bet schemes follow a particular routine, whether revealing it to their clients or otherwise',
				'Usually declare winners based on lesser participation allocations - When lesser people bet on an item, they win',
				'Imagine there was an open and decentralized platform for bets, where winners are based on open agreements or contracts',
				'Imagine the trust! Imagine the scalability! Imagine the disruption in the betting industry!'],
			link : ''
		},
		{
			id : 'community-social-media',
			title : 'Community-Based Social Media App',
			image : '',
			descriptions : ['Social Media Platform which puts you in scopes of location - You get to meet people within your community and beyond',
				'Easily make friends from \'not all over the world\', but just around you',
				'Seems promising a project, as it bridges gaps famous social media platforms have neglected'
			],
			link : ''
		},
		{
			id : 'webapps-research',
			title : 'African Web Apps Vulnerability Research',
			image : '',
			descriptions : ['Cybersecurity awareness in its early development stages in Africa, should be a key topic of interest to all stakeholders and enthusiast',
				'Started with a project that seeks to analyze mobile apps and web apps, not necessarily hosted physically within Africa, but primarily of significance to any African country',
				'As more focus would be on financially-related parties, no harm is intended to be done',
				'This project is for Educational and Informational purposes only, and its intentions must be strictly maintained, in case you want to contribute'
			],
			link : ''
		},
	],
	abilityTags : [
		'react js', 'express js', 'node js', 'springboot java', 'meteor js',
		'vue js', 'loopback js', 'SOLID', 'tdd', 'ui / ux design', 'entrepreneur',
		'cybersecurity enthusiast', 'aspiring politician'
	]
};

module.exports = {
	configuration : configuration
};