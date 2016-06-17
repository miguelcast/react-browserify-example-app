"use strict";

var React   = require('react');
var NewItem = require('./NewItem');

module.exports = React.createClass({

    render : function() {
        if( undefined === this.props.news ) {
            return (<div className="content notices">
                <span className="alert">Clic en icono de menu</span>
            </div>);
        }

        if( 0 === this.props.news.length ) {
            return (<div className="content notices">
                <span className="alert">No hay noticias</span>
            </div>);
        }
        
        return (<div className="content notices">
            {this.props.news.map(function(objN) {
                return <NewItem key={objN.id} new={objN} />;
            })}
        </div>);
    }
});