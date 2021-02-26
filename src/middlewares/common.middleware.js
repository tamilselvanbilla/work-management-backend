const response = require('../middlewares/response.middleware');

// Fetch the matched cases using find query
var findMethod = async (req, res, modal, query, controller) => {
    try {
        var output = await modal.find(filter.filter, query.select).sort(query.sort);
        response.successRes(res, output, "List generated successfully!");
    } catch (error) {
        response.errorRes(res, error, "List generation failure!", controller);
    }
}

// Insert data using insert query
var insert = async (req, res, model, query) => {
    try {
        var results = await model.insertMany(query);
        response.successRes(res, results, "Announcement created!");
    } catch (error) {
        response.errorRes(res, error, "Announcement creation failed!");
    }
}

// Update matched case and list them
var findAndUpdate = async (req, res, model, query) => {
    try {
        var results = await model.findOneAndUpdate(query.filter, query.update, query.options);
        response.successRes(res, results, "Updated success!");
    } catch (error) {
        response.errorRes(res, error, "Updated failure!");
    }
}

// Delete matched case
var deleteMethod = async (req, res, model, query) => {
    try {
        var results = await model.deleteOne(query);
        response.successRes(res, results, "Deleted success!");
    } catch (error) {
        response.errorRes(res, error, "Deleted failure!");
    }
}


module.exports = { findMethod, findAndUpdate, insert, deleteMethod };
