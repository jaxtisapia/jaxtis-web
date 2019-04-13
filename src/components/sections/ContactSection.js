import React, { Component } from "react";
import { googleAnalytics } from "../../scripts/googleAnalytics";

export default class ContactSection extends Component {
  componentDidMount() {
    googleAnalytics.pageview( "/contact" );
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container uk-container-small">
          <h3>GET IN TOUCH</h3>

          <div>
            <p>Want to make enquiries on any of my personal projects?</p>
            <p>Want help on any of your own projects too?</p>
            <p>
              Need help securing your mobile app or website from attackers? I
              have minimal and 'unprofessional' information and experience
            </p>
            <p>Any other general enquiries?</p>
          </div>

          <div>
            <p> Contact me via any of the options below:</p>
            <p className="uk-text-large uk-text-bold"> jaxtis.apia@gmail.com</p>
            <p className="uk-text-large uk-text-bold">+233 27 892 5201</p>
          </div>
        </div>
      </section>
    );
  }
}
