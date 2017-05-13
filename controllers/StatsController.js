const Stat = require('../models/Stats');
// CRUD operators in export
module.exports = {
  find: function(params, callback){
    Stat.find(params, function(err, stats){
      if(err){
        // error has to be first parameter, payload is 2nd
        callback(err, null);
        return;
      }
      callback(null, stats);
    });
  },
  findById: function(id, callback){
    Stat.findById(id, function(err, stat){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, stat);
    })
  },
  create: function(params, callback){
    Stat.create(params, function(err, stat){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, stat);
    })
  },
  update: function(id, params, callback){
    Stat.findByIdAndUpdate(id, params, {new:true}, function(err, stats){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, stats);
    })
  },
  delete: function(id, callback){
    Stat.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, null);
    })
  }
}