var mongoose = require('mongoose');
var schema = mongoose.Schema;

var companiesSchema = new schema({
	name: {type: String,required:true},
	date: {type: Date,default: Date.now()},
	description: {type: String},
	package: {type: String,required:true},
	branches: [String],
	eligibility: {
		tenth: {type: String},
		twelfth: {type: String},
		btech: {type: String}
	},
	process: {type:String},
	deadline: {type: Date}
});

var companiesModel = mongoose.model('companies',companiesSchema);

module.exports = companiesModel;
