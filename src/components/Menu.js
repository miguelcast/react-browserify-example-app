"use strict";
var React = require('react');

module.exports = React.createClass({
    render : function() {
        return (<header>
            <nav className="content">
                <i className="iMenu">
                    <div></div>
                    <div></div>
                </i>
                <h2 className="titleNav">Titulo de la noticia</h2>
            </nav>
        </header>);
    }
});