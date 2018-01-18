import React from 'react';

const ProfileItem =(props)=>{
        return (

            <div className="uk-accordion-content profile-opened-item">
                <p className="uk-text-lead uk-text-small">{props.title}</p>

                { props.descriptions.map(function (item) {
                        return <p>{item}</p> })}
            </div>
        )
};

export default ProfileItem;