"use strict";
var React = require('react');
var ReactDom = require('react-dom');
var Menu = require('./components/Menu');
var News = require('./components/News');
var StoreNews = require('./stores/News');

var App = React.createClass({
    getInitialState: function () {
        return {
            news: []
        };
    },

    componentDidMount: function () {
        var news = StoreNews();
        this.setState({
            news: news ? news : []
        });
    },

    render: function() {
        return (
            <div>
                <Menu key="menu" />
                <News key="news" news={this.state.news} />
            </div>
        );
    }
});

ReactDom.render(<App />, document.getElementById('App'));