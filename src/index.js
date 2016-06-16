"use strict";
var React = require('react');
var ReactDom = require('react-dom');
var Menu = require('./components/Menu');
var News = require('./components/News');

var App = React.createClass({
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