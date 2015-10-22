var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SnippetSchema = new Schema({
    code : String,
    title: String,
    description: String,
    created: {type: Date, default: Date.now()},
    views: {type: Number, default: 0},
    language: String,
    os_id: Number,
    framework: String,
    bad_feed: {type:Number, default:0},
    good_feed: {type:Number, default:0}
})

var SnippetModule = mongoose.model('Snippet', SnippetSchema)

module.exports = SnippetModule;