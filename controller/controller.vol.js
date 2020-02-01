const express = require('express');
const router = express.Router();
const service = require('../service/service.vol');

// routes
router.get('', vols);
router.get('/:id', vol);

module.exports = router;

function vols(req, res, next) {
  service.getAll()
    .then((v) => res.json(v))
    .catch(err => next(err));
}

function vol(req, res, next) {
  service.get(req.params.id)
    .then((v) => res.json(v))
    .catch(err => next(err));
}