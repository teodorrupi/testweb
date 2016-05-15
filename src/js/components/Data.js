/**
 * Created by btiwaree on 28/04/16.
 */

/**
 * @name: Name of the card
 * type: can either be url or info
 *      either
 *      @url: you have to add href key further
 *      or
 *      @info: you have to add information and type
 *          @type:  h1 for h1 tag
 *                  strong for strong tag
 * */

import _ from 'lodash';

let cards = [

    {
        type: 1,
        name: "Demo thing first",
        city: "Durres",
        address: "Some demo address"
    },
    
    {name: "show all snippets", type: "info", css_type: "strong", info: "?show_snippet_names=1"},
    {name: "QA Logs", type: "info", css_type: "strong", info: "ssh 192.168.43.133 #qa-preview-01"},
    {name: "QA Logs 2", type: "info", css_type: "strong", info: "ssh 192.168.42.21Â  #qa-preview-02"},

    {
        name: "HS User Journey & Deals JIRA Kanban Board",
        type: "url",
        url: "https://tasks.trivago.com/secure/RapidBoard.jspa?rapidView=183",
        source: require('../../img/arrow_down.png')
    },

    {
        name: "HS Content JIRA Kanban Board",
        type: "url",
        url: "https://tasks.trivago.com/secure/RapidBoard.jspa?rapidView=184",
        source: require('../../img/arrow_down.png')
    },

    {
        name: "HS Marketing JIRA Kanban Board",
        type: "url",
        url: "https://tasks.trivago.com/secure/RapidBoard.jspa?rapidView=180",
        source: require('../../img/arrow_down.png')
    }

];

export default cards;