import React, { Component, Fragment } from 'react';
import Footer from "../components/footer"
import Header from "../components/header"
import Communaute from "./communaute"
//import Usersettings from './usersettings';

export default class extends Component {

    render(){
        return (
            <Fragment>
            <Communaute/>
            <Footer/>
            </Fragment>
        )
    }
}