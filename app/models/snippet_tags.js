var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SnippetTagsSchema = new Schema({
    snippet_id: String,
    tag_id: String
})

var SnippetTagsModel =  mongoose.model('SnippetTag', SnippetTagsSchema)

module.exports = SnippetTagsModel