var Backbone = require('backbone');
var Adventure = require('./adventure');


module.exports = Backbone.Collection.extend({
    model: Adventure,
    url: '/api/adventures'
});
