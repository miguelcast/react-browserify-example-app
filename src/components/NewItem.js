"use strict";
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            details: false
        }
    },

    componentDidMount: function () {
        setTimeout(function () {
            var details = document.getElementById('n' + this.props.new.id);
            details.className = 'notice transform notice-active';
        }.bind(this), (100 * this.props.new.id));
    },

    toggleDetails : function() {
        var details = document.getElementById(this.props.new.id);
        if(details.className.indexOf('noticeDetails-active') === -1){
            details.className = 'noticeDetails transform noticeDetails-active';
        }else{
            details.className = 'noticeDetails transform';
        }
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
