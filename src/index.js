"use strict";
var React = require('react');
var ReactDom = require('react-dom');
var Menu = require('./components/Menu');
var News = require('./components/News');
var StoreNews = require('./stores/News');

var App = React.createClass({
    componentDidMount: function () {
        console.log(StoreNews());
    },

    render: function() {
        return (
            <div>
                <Menu key="menu" />
                <News key="news"/>
            </div>
        );
    }
});

ReactDom.render(<App />, document.getElementById('App'));