const { workModel } = require('../models/work.model');
const reuseApi = require('../middlewares/common.middleware');

var controller = "work.controller"

// Reuseable queries

// Calling find method, can pass the conditions into the filter object.
exports.listAppointments = async (req, res) => {
    var query = {}
    query.filter = {};
    reuseApi.findMethod(req, res, workModel, query, controller);
}

// Can pass req.body into the query object. It will insert whole body into the collection
exports.newAppointment = async (req, res) => {
    var query = req.body
    reuseApi.insert(req, res, workModel, query, controller);
}

// Update query pass the match objects into the filter object, updated data to the update object
exports.updateAppointment = async (req, res) => {
    var query = {}
    query.filter = { _id: req.params.id };
    query.update = req.body;
    query.options = { new: true };
    reuseApi.findAndUpdate(req, res, workModel, query, controller);
}

// It will remove the document from the collection
exports.deleteAppointment = async (req, res) => {
    var query = { _id: req.params.id }
    reuseApi.deleteMethod(req, res, workModel, query, controller);
}