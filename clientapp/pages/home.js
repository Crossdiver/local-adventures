var PageView = require('./base');
var templates = require('../templates');
var AdventureView = require('../views/adventure');


module.exports = PageView.extend({
    title: 'home',
    template: templates.pages.home,
    render: function () {
        this.renderAndBind();
        $('body').attr('id', 'pageHome');
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
