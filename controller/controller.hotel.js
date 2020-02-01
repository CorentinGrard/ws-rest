const express = require('express');
const router = express.Router();
const service = require('../service/service.hotel');

// routes
router.get('/', hotels);
router.get('/:id', hotel);

module.exports = router;

function hotels(req, res, next) {
  service.getAll()
    .then((v) => res.json(v))
    .catch(err => next(err));
}

function hotel(req, res, next) {
  service.get(req.params.id)
    .then((v) => res.json(v))
    .catch(err => next(err));
}