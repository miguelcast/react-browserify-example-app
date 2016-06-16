var Const = require('../const/consts');
var jQuery = require('jquery');


module.exports = function () {
    return jQuery.ajax({
        url: Const.path,
        async: false,
        method: 'GET',
        dataType: 'json'
    }).responseJSON;
}