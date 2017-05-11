const Track = require('../models/Tracks');

// CRUD operators in export
module.exports = {
  find: function(params, callback){
    Track.find(params, function(err, tracks){
      if(err){
        // error has to be first parameter, payload is 2nd
        callback(err, null);
        return;
      }
      callback(null, tracks);
    });
  },
  findById: function(id, callback){
    Track.findById(id, function(err, track){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, track);
    })
  },
  create: function(params, callback){
    Track.create(params, function(err, track){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, track);
    })
  },
  update: function(id, params, callback){
    Track.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, comment);
    })
  },
  delete: function(id, callback){
    Track.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, null);
    })
  }
}