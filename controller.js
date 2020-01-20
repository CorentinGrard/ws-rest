const express = require('express');
const router = express.Router();
const service = require('./service');

// routes
router.get('/vol/:id', vol);
router.get('/vol', vols);
router.get('/set', set);

module.exports = router;

function vol(req, res, next) {
  service.get(req.params.id)
    .then((v) => res.json(v))
    .catch(err => next(err));
}

function vols(req, res, next) {
  service.getAll()
    .then((v) => res.json(v))
    .catch(err => next(err));
}

function set(req, res, next) {
  service.set(req.body)
    .then((v) => res.json(v))
    .catch(err => next(err));
}