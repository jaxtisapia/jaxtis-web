import React, {Component} from 'react';

const ProfileItem =(props)=>{
        return (

            <div className="uk-accordion-content">
                <p className="uk-text-lead uk-text-small uk-text-uppercase">{props.title}</p>

                { props.descriptions.map(function (item) {
                        return <p>{item}</p> })}
            </div>
        )
};

export default ProfileItem;