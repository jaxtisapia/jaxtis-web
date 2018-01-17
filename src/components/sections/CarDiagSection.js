import React, {Component} from 'react'

export default class CarDiagSection extends Component{
    render(){
        return(
            <section>
                <article className="uk-article">

                    <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>

                    <p className="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>

                    <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="uk-grid-small uk-child-width-auto" uk-grid>
                        <div className="uk-padding-small">
                            <button className="uk-button uk-button-danger">Download Android App</button>
                        </div>
                        <div className="uk-padding-small">
                            <button className="uk-button uk-button-danger">Download IOS App</button>
                        </div>
                    </div>

                </article>
            </section>
        )
    }
}