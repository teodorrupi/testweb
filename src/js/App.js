/**
 * Created by bishesh on 01.05.16.
 */


import React from 'react';
import ReactDOM from 'react-dom';


//Importing Card
import { Card, Header, CardWithImage, Search, Parent, Options } from './index';

import Data from './components/Data';

var App = React.createClass({
    getInitialState: function(){
        return {
            filterText: ''
        }

    },
    handleInput: function(filterText){
        this.setState({
            filterText: filterText
        })
    },

    render: function(){
        return (
                    <div className="container-fluid main-container">
                        <Header />
                        <div className="col-lg-8 col-lg-offset-2 col-md-9 col-md-offset-1 main-container">
                            <Search filterText={this.state.filterText} onUserInput={this.handleInput}/>
                        </div>
                        <Parent cards={this.props.cards} filterText={this.state.filterText} />
                    </div>
                  
        )

    }

});

ReactDOM.render(<App cards={Data}/>, document.getElementById('app'));

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
