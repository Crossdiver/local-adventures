var PageView = require('./base');
var templates = require('../templates');
var AdventureView = require('../views/adventure');


module.exports = PageView.extend({
    title: 'home',
    template: templates.pages.home,
    render: function () {
        this.renderAndBind();

        this.renderCollection(
        	this.collection,
        	AdventureView,
        	this.$('#adventures')[0]
        );
    }
});
