var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = window.$;
var Event = require('./../models/Event');

var Events = Backbone.Collection.extend({
    model: Event,

    initialize: function(){
        console.log('test2');
    }
});
