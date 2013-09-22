var HumanView = require('human-view');
var templates = require('../templates');


module.exports = HumanView.extend({
    template: templates.includes.adventure,
    textBindings: {
        name: '.name'
    },
    events: {
        'click .delete': 'handleRemoveClick'
    },
    render: function () {
        this.renderAndBind();
    },
    handleRemoveClick: function () {
        this.model.destroy();
    }
});
