import React, { Component } from "react";
import ProfileItem from "../item/ProfileItem";
import Collapsible from "react-collapsible";
import { googleAnalytics } from "../../scripts/googleAnalytics";

let webConfiguration = require("../../config/profile").configuration;

export default class ProfileSection extends Component {
  componentDidMount() {
    googleAnalytics.pageview( "/profile" );
  }

  render() {
    return (
      <section className="uk-section" id="profile">
        <div className="uk-container uk-container-small">
          <ul uk-accordion>
            <li>
              <Collapsible
                className="profile-header uk-text-uppercase"
                trigger="Experience"
                open={true}
              >
                <div className="profile-opened">
                  <div className="uk-accordion-content">
                    {webConfiguration.profile.experience.map(function(ex) {
                      return (
                        <ProfileItem
                          title={ex.institution}
                          descriptions={ex.descriptions}
                        />
                      );
                    })}
                  </div>
                </div>
              </Collapsible>
            </li>

            <li>
              <Collapsible
                className="profile-header uk-text-uppercase"
                trigger="Education"
                open={true}
              >
                <div className="profile-opened">
                  {webConfiguration.profile.education.map(function(ed) {
                    return (
                      <ProfileItem
                        title={ed.institution}
                        descriptions={[ed.course, ed.period]}
                      />
                    );
                  })}
                </div>
              </Collapsible>
            </li>

            <li>
              <Collapsible
                className="profile-header uk-text-uppercase"
                trigger="Skills and other Interests"
                open={true}
              >
                <div className="profile-opened">
                  <div className="uk-accordion-content">
                    {webConfiguration.profile.skill_interest.map(function(si) {
                      return <ProfileItem {...si} />;
                    })}
                  </div>
                </div>
              </Collapsible>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
