"use strict";

var jQuery = require('jquery');

module.exports = {
    showNews: function (id) {
        var counterTime = jQuery('#' + id).index();
        counterTime = counterTime > 10 ? 10 : counterTime;
        setTimeout(function () {
            jQuery('#' + id).addClass('notice-active');
        }.bind(this), (100 * counterTime));
    },

    hideNews: function () {
        jQuery('.notice').each(function (idx) {
            jQuery(this).removeClass('notice-active');
        });
    },

    toggleDetails: function (id) {
        jQuery('#' + id).toggleClass('noticeDetails-active');
    }
};
