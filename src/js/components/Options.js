/**
 * Created by bishesh on 01.05.16.
 */

import React from "react";

var Card = React.createClass({
    getInitialState: function () {
        return {
            data: ''
        }
    },
    render(){
        return (
            <div className="g_card_button_container">
                <div className="option-container">
                    <a className="g_button">
                        Add Property
                    </a>
                </div>

            </div>
            
            
            
        )
    }
});

export default Card;



