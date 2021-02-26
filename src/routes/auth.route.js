module.exports = (app) => {
    var value = require("../controllers/auth.controller");

    app.post("/api/auth/createApp", value.createApplication);

    app.post("/api/auth/login", value.loginUser);
    app.post("/api/auth/forgotPass", value.forgotPassword);

    app.post("/api/auth/sendOtp", value.sendOTP);
    app.patch("/api/auth/otpVerify", value.OTPverify);

    app.patch("/api/auth/updateApp", value.updateApplication);
};