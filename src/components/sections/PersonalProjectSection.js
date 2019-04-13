import React, { Component } from "react";
import PersonalProjectItem from "../item/PersonalProjectItem";
import { googleAnalytics } from "../../scripts/googleAnalytics";
let webConfig = require("../../config/profile").configuration;

export default class PersonalProjectSection extends Component {
  componentDidMount() {
    googleAnalytics.pageview("/personalProjects" );
  }

  render() {
    return (
      <section className="uk-section" id="personal-projects">
        <div className="uk-container uk-container-small">
          <h3 className="uk-text-uppercase uk-text-center">PRIVATE PROJECTS</h3>

          <div className="uk-flex  uk-flex-row uk-flex-wrap-around uk-flex-wrap uk-flex-center">
            {webConfig.personalProjects.map(function(project) {
              return <PersonalProjectItem {...project} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
