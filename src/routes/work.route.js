module.exports = (app) => {
    var value = require("../controllers/work.controller");
    var tokenVerify = require('../middlewares/token.middleware');

    // Fetch appointments list
    app.get("/api/work/appointements/list", value.listAppointments);
    // Create new appointment
    app.post("/api/work/appointements/new", value.newAppointment);
    // Update appointment
    app.patch("/api/work/appointements/update/:id", value.updateAppointment);
    // Delete appointment
    app.delete("/api/work/appointements/delete/:id", value.deleteAppointment);
};