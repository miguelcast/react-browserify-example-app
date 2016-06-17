"use strict";
var React = require('react');

module.exports = React.createClass({
    render : function() {
        return (<header>
            <nav className="content">
                <i className="iMenu" onClick={this.props.toggleNewsHandle.bind(null, this.props.menu)} >
                    <div></div>
                    <div></div>
                </i>
                <h2 className="titleNav"></h2>
            </nav>
        </header>);
    }
});