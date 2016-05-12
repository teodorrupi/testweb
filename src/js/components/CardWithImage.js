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
            <div className="col-md-12 g_card card_header_image">
                <div className="g_card_main">
                    <div className="g_card_section">
                        <div className="g_card_content">
                            <div className="g_card_header">
                                <img className="g_card_header_img" src="http://www.hungerfreecolorado.org/wp-content/uploads/2014/08/Icon-Dining1-300x300.jpg"/>
                                    <h3 className="g_card_header_primary_relative">
                                        <a href="#">Demo Property Name</a>
                                    </h3>
                                    <div className="g_card_header_secondary_relative">
                                        <cite>Demo address street 184, zip code, city</cite>
                                    </div>
                            </div>
                            <div className="g_card_extra ">
                               <a href="#" className="g_card_extra_content ">
                                   <div>
                                       Good (223 reviews) - $$$ - Closed (opens at 10:00)
                                   </div>
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
        )
    }
});

export default Card;



