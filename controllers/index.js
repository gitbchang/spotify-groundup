var ZoneController = require('./ZoneController');
var CommentController = require('./CommentController');
var TrackController = require('./TrackController');
var StatsController = require('./StatsController')

module.exports = {
  comment: CommentController,
  zone: ZoneController,
  track: TrackController,
  stats: StatsController
}