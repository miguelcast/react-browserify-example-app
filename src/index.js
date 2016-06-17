"use strict";

var  React      = require('react')
    ,ReactDom   = require('react-dom');

var  Menu       = require('./components/Menu')
    ,News       = require('./components/News')
    ,StoreNews  = require('./stores/News')
    ,Animate    = require('./animate');

var App = React.createClass({
    getInitialState: function () {
        return {
            news: undefined
        };
    },

    toggleNewsHandle: function (toggle) {
        if( true == toggle ) {
            var news = StoreNews();
            this.setState({
                news: news ? news : []
            });
        } else {
            Animate.hideNews();
            setTimeout(function () {
                this.setState({
                    news: undefined
                });
            }.bind(this), 1000);
        }
    },

    render: function() {
        return (
            <div>
                <Menu
                    key="menu"
                    toggleNewsHandle={this.toggleNewsHandle}
                    menu={this.state.news === undefined ? true : false}
                />
                <News key="news" news={this.state.news} />
            </div>
        );
    }
});

ReactDom.render(<App />, document.getElementById('App'));