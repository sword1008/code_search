var mongoose =  require("mongoose");

var model = {};

model.framework = require("./models/framework")
model.language = require("./models/language");
model.operatingSystem = require("./models/operating_system");
model.snipTag = require("./models/snip_tag");
model.snippet = require("./models/snippet");
model.snippetTags = require("./models/snippet_tags");

module.exports = model