var HumanModel = require('human-model');


module.exports = HumanModel.define({
    props: {
        id: 'number',
        name: ['string', true, ''],
        description: ['string', true, ''],
        location: ['string', true, ''],
        type: ['string', true, ''],
        stats: ['string', true, ''],
        season: ['string', true, ''],
        tags: ['string', true, ''],
        picture: ['string', true, ''],
        rating: 'number'
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        
    }
});
