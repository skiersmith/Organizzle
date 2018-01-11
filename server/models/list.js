var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now },
	// Relations
	categoryId: { type: ObjectId, ref: models.category.name, required: true }
});

module.exports = mongoose.model(models.list.name, schema);