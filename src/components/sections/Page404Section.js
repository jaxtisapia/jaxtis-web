import React, { Component } from "react";
import { googleAnalytics } from "../../scripts/googleAnalytics";

export default class Page404Section extends Component {
  componentDidMount() {
    googleAnalytics.pageview("/404" );
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-flex uk-flex-center">
            <h3 className="big-404">404 ERROR</h3>
          </div>

          <div className="uk-flex uk-flex-center">
            <p className="description-404">
              Page not found - Error in server - Please try again
            </p>
          </div>
        </div>
      </section>
    );
  }
}
