import React, {Component} from 'react'

export default class ComingSoonSection extends Component{
    render(){
        return (
            <section className='uk-flex-stretch'>
                <div className='uk-flex uk-flex-stretch uk-flex-middle uk-text-center'>
                <p className='uk-text-large uk-text-center uk-text-capitalize'>website is currently under construction. please use any of the buttons below to download the <span className='uk-text-bold uk-text-success'>CAR DIAGNOSTICS APP</span></p>
                </div>

                <div>
                <button className="uk-button uk-button-primary">Download for Android</button>
                </div>

                <div>
                <button className="uk-button uk-button-default" disabled>Download for IOS</button>
                </div>

            </section>
        )
    }
}