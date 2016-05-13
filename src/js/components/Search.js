/**
 * Created by bishesh on 07.05.16.
 */

import React from "react";

var Search = React.createClass({
    getInitialState: function () {
        return {
            data: ''
        }
    },

    render(){

        return (
            <div className="search-container">
                <div className="search-box">
                    <form className="search-form">
                        <div>
                            <div className="search-input-container">
                                <input maxlength="2048" placeholder="search" name="q" autocapitalize="off" autocomplete="off" autocorrect="off" title="Search" type="search" value="" aria-label="Search" aria-haspopup="false" role="combobox" aria-autocomplete="both" dir="ltr" spellcheck="false" className="search-input"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
    
});

export default Search;

