import React, {Component} from 'react'
import PersonalProjectSection from "../sections/PersonalProjectSection";
import PersonalProjectItem from "./PersonalProjectItem";

export default class ResearchItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            // ResearchItem is just an extension of PersonalProjectItem
            <PersonalProjectItem {...this.props}/>
        )
    }
}