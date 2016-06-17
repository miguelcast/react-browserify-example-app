"use strict";

var React   = require('react');
var Animate = require('../animate');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            details: false
        }
    },

    componentDidMount: function () {
        setTimeout(function () {
            Animate.showNews('n' + this.props.new.id);
        }.bind(this), (100 * this.props.new.id));
    },

    toggleDetails : function() {
        Animate.toggleDetails(this.props.new.id);
    },

    render : function() {
        return (<div>
            <div id={'n' + this.props.new.id} className="notice transform" onClick={this.toggleDetails} >
                <div className="circle"></div>
                <strong>{this.props.new.title}</strong>
            </div>
            <div id={this.props.new.id} className='noticeDetails transform'>
                <img className="transform" src={this.props.new.image} alt={this.props.new.title} />
                <p className="transform">
                    {this.props.new.content}
                </p>
            </div>
        </div>);
    }
});
