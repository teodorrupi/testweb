/**
 * Created by trupi on 15/05/16.
 */

import React from 'react';
import CardWithImage from './CardWithImage';
import Card from './Card';
import Options from './Options'
import _ from 'lodash';

var Parent = React.createClass({
    render: function () {
        return (
            <div className="main-container full-page col-md-12">
                <div className="data-container col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
                    <div className="main">
                        <Card />
                    </div>
                </div>
                <div className="data-container col-md-6">
                    <Options />
                    <div className="main">
                        {this.props.cards.map(function(card) {
                            let card_name = _.toLower(card.name);
                            let card_city = _.toLower(card.city);
                            let filter_text = _.toLower(this.props.filterText);

                            let filters = filter_text.split(" ");
                            let x = 0;
                            for(x=0; x<filters.length; x++){
                                if (card_name.indexOf(filters[x]) === -1 && card_city.indexOf(filters[x]) === -1){
                                    return;
                                }
                            }
                            return <CardWithImage
                                key={card.name}
                                name={card.name}
                                type={card.type}
                                address={card.address}
                                city={card.city}
                                info={card.info}
                                css_type={card.css_type}
                                url={card.url}
                                img={card.source}>{card.name}</CardWithImage>;
                        }.bind(this))}

                    </div>
                </div>
            </div>
        );
    }
});

export default Parent;