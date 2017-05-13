var mongoose = require('mongoose');
var StatSchema = new mongoose.Schema({
  trackId: {type: Number, default: ''},
  danceability: {type: Number, default: ''},
  energy: {type: Number, default: ''},
  key: {type: Number, default: ''},
  loudness: {type: Number, default: ''},
  valence: {type: Number, default: ''},
  tempo: {type: Number, default: ''}
});

module.exports = mongoose.model('StatSchema', StatSchema);