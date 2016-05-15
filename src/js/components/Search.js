/**
 * Created by bishesh on 07.05.16.
 */

import React, { Component, PropTypes } from "react";

var Search = React.createClass({
    getInitialState: function () {
        return {
            query: ''
        }
    },
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.value
        );
    },
    render: function(){
        focus : true;

        return (
            <div className="search-container">
                <div className="search-box">
                    <form className="search-form" method="GET" autocomplete="off" action="">
                        <div>
                            <div className="search-input-container">
                                <input autoFocus={focus} type="text" maxlength="2048" placeholder="search" ref="filterTextInput" autocapitalize="off" autocomplete="off" autocorrect="off" title="Search" aria-label="Search" aria-haspopup="false" dir="ltr" spellcheck="false" className="search-input" value={this.props.filterText} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
    
});

export default Search;

