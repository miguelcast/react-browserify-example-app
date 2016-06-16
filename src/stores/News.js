var Const = require('../const/consts');
var Ajax = require('');
var newsAjax = new Ajax({
    url: Const.path,
    method: 'GET',
    dataType: 'json'
});

newsAjax.on('success', function (event, data) {
    return data;
});

module.exports = function () {
    return newsAjax.send();
}