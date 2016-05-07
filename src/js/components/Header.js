/**
 * Created by bishesh on 07.05.16.
 */

import React from "react";

var Header = React.createClass({
    getInitialState: function () {
        return {
            data: ''
        }
    },

    render(){

        return (
            <div className="header-container">
                <a href="#" className="header-container-icon">
                    <div className="header-container-icon-image"></div>
                </a>
            </div>
        )

    }
    
});

export default Header;

