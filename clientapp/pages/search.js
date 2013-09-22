var PageView = require('./base');
var templates = require('../templates');
var AdventureView = require('../views/adventure');


module.exports = PageView.extend({
    title: 'Search',
    template: templates.pages.search,
    render: function () {
        this.renderAndBind();

        this.renderCollection(this.collection, AdventureView, this.$('.people')[0]);
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    },
    resetCollection: function () {
        this.collection.reset();
    }
});
