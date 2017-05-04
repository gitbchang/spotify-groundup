const express = require('express');
const router = express.Router();

var controllers = require('../controllers/');

router.get('/:resource', function (req, res, next) {
  let resource = req.params.resource;
  let controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid resource request: ' + resource
    });
    return;
  }

  controller.find(req.query, function (err, results) {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      results: results
    });
  });

});

router.get('/:resource/:id', function (req, res, next) {
  let resource = req.params.resource;
  let id = req.params.id;
  let controller = controllers[resource];

  controller.findById(id, function (err, result) {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: result
    });
  });
});

router.post('/:resource', function (req, res, next) {
  let resource = req.params.resource;
  let data = req.body;
  let controller = controllers[resource];

  controller.create(req.body, function (err, result) {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: result
    });
  });

});

router.put('/:resource/:id', function(req, res, next) {
  let resource = req.params.resource;
  let controller = controllers[resource];
  let id = req.params.id;
  let newData = req.body;

  controller.findByIdAndUpdate(id, newData, {new:true}, function(err, result){
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      result: result
    });
  });
  
});

module.exports = router;