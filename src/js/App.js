/**
 * Created by bishesh on 01.05.16.
 */


import React from 'react';
import ReactDOM from 'react-dom';

//Importing Card
import { Card, Header } from './index';

var App = React.createClass({
    getInitialState: function(){
        return {
            filterText: ''
        }

    },
    render: function(){
        return (
                    <div className="container-fluid main-container">
                        <Header />
                        <div className="data-container">
                            <div className="main">
                                <Card />
                                <Card />
                                <Card />
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

