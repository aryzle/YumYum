var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = window.$;

var Event = Backbone.Model.extend({
    defaults: {
        name: 'default',
        date: '',
        time: '',
        desciption: '',
        location: '',
        date_posted: ''
    },

    initialize: function() {
        console.log('test');
    }
});
