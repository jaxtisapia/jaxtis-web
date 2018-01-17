import React from 'react'

const PortfolioItem = (props) =>{
    return (
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <img src={props.image} alt=""/>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.title}</h3>
                    <p>{props.description}</p>

                    <a href={props.link} target='_blank'>View More</a>

                </div>
            </div>

    )
};

export default PortfolioItem;