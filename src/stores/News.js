"use strict";

var jQuery = require('jquery');
var Const  = require('../const/consts');

module.exports = function () {
    return jQuery.ajax({
        url: Const.path,
        async: false,
        method: 'GET',
        dataType: 'json'
    }).responseJSON;
}