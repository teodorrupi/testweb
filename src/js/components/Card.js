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
            <div className="col-md-12 g_card">
                <div className="g_card_section">
                    <div className="g_card_content">
                    <div className="g_card_header">
                        <h3 className="g_card_header_primary">
                            <a href="#">Demo Property Name</a>
                        </h3>
                        <div className="g_card_header_secondary">
                            <cite>Demo address street 184, zip code, city</cite>
                        </div>
                    </div>
                    <div className="g_card_extra">
                        <span className="g_card_extra_content">
                            <span className="g_card_extra_info">
                                Für Mobilgeräte -
                            </span>
                            Wie Sie JavaScript in Ihrem Browser
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            
            
            
        )
    }
});

export default Card;



