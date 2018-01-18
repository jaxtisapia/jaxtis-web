import React from 'react'

const PersonalProjectItem =(props)=>{
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m  personal-project-item">
            <h3 className="uk-card-title uk-text-uppercase medium-size-text">{props.title}</h3>

            {props.descriptions.map(function (item, key) {
                return <p key={key}>{item}</p>
            })}

            <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
            </div>
        </div>
    )
};

export default PersonalProjectItem;
