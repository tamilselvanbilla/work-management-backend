const { authModel } = require('../models/auth.model');
const { errorRes, successRes } = require('../middlewares/response.middleware');
const reuseApi = require('../middlewares/common.middleware');

var controller = "auth.controller"

// Create new user query 
exports.createApplication = async (req, res) => {
    var query = req.body
    reuseApi.insert(req, res, authModel, query, controller);
}

exports.loginUser = async (req, res) => {
    try {
        var output = await authModel.find({ emailId: req.body.emailId, password: req.body.password });
        if (!output) {
            throw "User not found"
        }
        // Token generation functuin also can do here {}
        successRes(res, output, "Login successfully!");
    } catch (error) {
        errorRes(res, error, "Login failure!", controller);
    }
}


// Update query pass the match objects into the filter object, updated data to the update object
exports.sendOTP = async (req, res) => {
    var query = {}
    query.filter = { emailId: req.body.emailId };
    query.update = { otp: otpGenerator() };
    query.options = { new: true };
    // Call funciton here to send otp via sms or email {}
    reuseApi.findAndUpdate(req, res, authModel, query, controller);
}

// Update query pass the match objects into the filter object, updated data to the update object
exports.OTPverify = async (req, res) => {
    var query = {}
    query.filter = { emailId: req.body.emailId, otp: req.body.otp };
    query.update = { otp: null };
    query.options = { new: true };
    reuseApi.findAndUpdate(req, res, authModel, query, controller);
}

// Update query pass the match objects into the filter object, updated data to the update object
exports.updateApplication = async (req, res) => {
    var query = {}
    query.filter = { _id: req.params.id };
    query.update = req.body;
    query.options = { new: true };
    reuseApi.findAndUpdate(req, res, authModel, query, controller);
}

function otpGenerator() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}