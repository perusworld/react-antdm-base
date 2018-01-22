import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Settings.less';

export default class Settings extends Component {
    render() {
        return (
            <div>
                <h3>Settings</h3>
                <NavLink className="nav-link" to={"/details/10"}>Details</NavLink>                
            </div>
        )
    }
}
