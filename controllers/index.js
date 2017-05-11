var ZoneController = require('./ZoneController');
var CommentController = require('./CommentController');
var TrackController = require('./TrackController');

module.exports = {
  comment: CommentController,
  zone: ZoneController,
  track: TrackController
}