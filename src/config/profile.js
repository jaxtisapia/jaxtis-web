let weriseImage = require('../assets/img/werise-portfolio.jpg');

let configuration = {
    profile:{
        education:[
            {
                institution:'Kwame Nkrumah University of Science and Technology, Kumasi',
                course: 'Bachelor of Science (BSc.) Computer Engineering',
                period:'2013 - 2017'
            },
            {
                institution:'Prempeh College, Kumasi',
                course: 'General Science',
                period:'2009 - 2013'
            }],
        experience:[
            {
                institution: 'Planned Parenthood Assocation of Ghana',
                descriptions: ['National Service Personnel - Volunteer',
                    'September 2017 - Present',
                    'Responsible for grouping and analysis of client data',
                    'Social outreach and peer counselling on sexuality and related discussions']
            },
            {
                institution: 'Ghana Robotics Academy Foundation',
                descriptions: ['Robotics Trainer/Coach',
                    'April 2014 - Present',
                    'Helping young students in elementary up to Senior High School, gain knowledge of robotics and its powerful applications in Ghana through the Okoree Initiative',
                    'Trained four Senior High Schools for Robotics Inspired Science Education (RISE) competitions',
                    'Trained Junior High Students for the first time to defeat Senior High Students in the national Robotics Inspired Science Education (RISE) competition in 2014, 2015 and 2016']
            },
            {
                institution: 'ASQII Incorporated, Kumasi',
                descriptions: ['UI - UX Developer',
                    'May 2016 - January 2018',
                    'Responsible for modelling mobile and web apps prior to development',
                    'Responsible for researching best user experiences tailored to suit any software project',
                    'Creating animation and software graphic components for best user experience']
            },
            {
                institution: 'Software and Database Administration',
                descriptions: ['Opoku Ware Basic School, Kumasi',
                    'May 2014 - Nov 2016',
                    'Built an Examination Records Management Software that automatically handles rankings and promotions of students',
                    'Currently adding extra sub-features to the system and strengthening data security']
            },
            {
                institution: 'Front End Developer - Android Native',
                descriptions: ['The Gatsby Magazine - Ghana (Available only on Play Store)',
                    'Sept 2016 - Sept 2016',
                    'Development of Android app with offline and online sync states']
            },
            {
                institution: 'BackEnd Developer - Android Native',
                descriptions: ['The Gatsby Magazine',
                    'Sept 2016 - Sept 2016',
                    'Developed REST API for frontend clients to consume and receive magazine content',
                    'Main tools used were Python, Django, Postgres']
            },
        ],
        skill_interest:[
            {
                title:'Personal Skills',
                descriptions: ['Quick Learner, Creative, Team-Leader, Team-Player']
            },
            {
                title:'Interests',
                descriptions: ['Cyber Security, Programming, Graphic Designing, Robotics']
            },
        ]
    },
     portfolio:[
         {
             title:'WeRise Foundation - Ghana (Company Website)',
             description:'WERISE Foundation is a Non-Governmental Organisation that advocates for persons with disabilities, kids with special needs and orphans, by assisting them with the necessary resources, to create an all inclusive environment.',
             link:'http://www.werisefoundationgh.com/',
             image: weriseImage
         },
         {
             title:'WeRise Foundation - Ghana (Company Website)',
             description:'WERISE Foundation is a Non-Governmental Organisation that advocates for persons with disabilities, kids with special needs and orphans, by assisting them with the necessary resources, to create an all inclusive environment.',
             link:'http://www.werisefoundationgh.com/',
             image: weriseImage
         },
     ]
 };

module.exports = {
    configuration:configuration
};