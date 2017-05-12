var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
	title: {
		type: String
	},
	name: {
		type: String
	},
	album: {
		type: String
	},
  id: {
		type: String
	},
  imageUrl: {
    type: String
  },
  trackUrl: {
    type: String
  }
});

var Track = mongoose.model('Track', trackSchema);
module.exports = Track;
