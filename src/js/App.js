/**
 * Created by bishesh on 01.05.16.
 */


import React from 'react';
import ReactDOM from 'react-dom';

//Importing Card
import { Card } from './index';

var classNames = require('classnames');


var App = React.createClass({
    getInitialState: function(){
        return {
            filterText: ''
        }

    },
    render: function(){
        return (
            <div class={classNames('container-fluid', 'main-container')}>
                <div class="header-container">
                    <a href="#" class="header-container-icon">
                        <div class="header-container-icon-image"></div>
                    </a>
                </div>

                <div class="data-container">
                    <div class="main">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        )

    }

});

ReactDOM.render(<App />, document.getElementById('app'));

