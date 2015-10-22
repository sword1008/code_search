var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var operatingSystemSchema = new Schema({
    name: String
});


var operatingSystemModel = mongoose.model('OperatingSystem', operatingSystemSchema);

module.exports = operatingSystemModel;