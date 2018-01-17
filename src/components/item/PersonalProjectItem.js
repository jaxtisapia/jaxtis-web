import React from 'react'

const PersonalProjectItem =(props)=>{
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title">{props.title}</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
};

export default PersonalProjectItem;
