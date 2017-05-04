const Comment = require('../models/Comment');
// CRUD operators in export
module.exports = {
  find: function(params, callback){
    Comment.find(params, function(err, comments){
      if(err){
        // error has to be first parameter, payload is 2nd
        callback(err, null);
        return;
      }
      callback(null, comments);
    });
  },
  findById: function(id, callback){
    Comment.findById(id, function(err, comment){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, comment);
    })
  },
  create: function(params, callback){


    Comment.create(params, function(err, comment){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, comment);
    })
  },
  update: function(id, params, callback){
    Comment.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, comment);
    })
  },
  delete: function(id, callback){
    Comment.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, null);
    })
  }
}