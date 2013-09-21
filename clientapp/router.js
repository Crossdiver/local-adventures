/*global app, me, $*/
var Backbone = require('backbone');
var HomePage = require('./pages/home');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    }
});
