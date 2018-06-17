import React from 'react'

const PortfolioItem = (props) =>{
    return (
            <div className="uk-card uk-card-default uk-margin-large card-squeezed" >
                <div className="uk-card-media-top">
                    <img src={props.image} alt=""/>
                </div>
                <div className="uk-card-body">
                    <p className="uk-card-title uk-text-uppercase medium-size-text">{props.title}</p>
                    <p>{props.description}</p>

                </div>
                <div className="uk-card-footer">
                    {
                         (props.link) ? <a href={props.link} target='_blank' className="uk-button uk-button-text">View More</a> : null
                    }
                    {/*<a href={props.link} target='_blank' className="uk-button uk-button-text">View More</a>*/}
                </div>
            </div>

    )
};

export default PortfolioItem;