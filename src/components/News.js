"use strict";
var React = require('react');
var NewItem = require('./NewItem');

module.exports = React.createClass({

    render : function() {
        
        return (<div className="content notices">
            {this.props.news.map(function(objN) {
                return <NewItem key={objN.id} new={objN} />;
            })}
        </div>);
    }
});