var mongoose = require('mongoose');
var TrackSchema = new mongoose.Schema({
  trackName: {type: String, default: ''},
  artistNames: {type: Array, default: []},
  trackId: {type: String, default: ''},
  imageUrl: {type: String, default: ''},
  trackPreviewUrl: {type: String, default: ''}
});

module.exports = mongoose.model('TrackSchema', TrackSchema);