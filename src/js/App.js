/**
 * Created by bishesh on 01.05.16.
 */


import React from 'react';
import ReactDOM from 'react-dom';


//Importing Card
import { Card, Header, CardWithImage, Search } from './index';

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
                        <div className="col-lg-8 col-lg-offset-2 col-md-9 col-md-offset-1 main-container">
                            <Search />
                        </div>
                        <div className="main-container col-md-12">
                            <div className="data-container col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
                                <div className="main">
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
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
                            <div className="data-container col-md-6">
                                <div className="main">
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <CardWithImage />
                                    <Card />
                                    <Card />
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
                    </div>
                  
        )

    }

});

ReactDOM.render(<App />, document.getElementById('app'));

/*
<div className="data-container col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
    <div className="main">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</div>*/
