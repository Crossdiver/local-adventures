/*global app, me, $*/
var Backbone = require('backbone');
var HomePage = require('./pages/home');
var SearchPage = require('./pages/search');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        '/search': 'search'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    },

    search: function () {
        app.renderPage(new SearchPage({
            model: me,
            collection: app.adventures
        }));
    }
});
