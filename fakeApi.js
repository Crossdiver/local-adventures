var _ = require('underscore');


var adventures = [
    {
        id: 1,
        name: 'Howard Amon'
    }
];

var id = 7;

function get(id) {
    return _.findWhere(adventures, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(adventures);
};

exports.add = function (req, res) {
    var adventure = req.body;
    adventure.id = id++;
    adventures.push(adventure);
    res.status(201).send(adventure);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.delete = function (req, res) {
    var found = get(req.params.id);
    if (found) adventures = _.without(adventures, found);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.update = function (req, res) {
    var found = get(req.params.id);
    if (found) _.extend(found, req.body);
    res.status(found ? 200 : 404);
    res.send(found);
};


