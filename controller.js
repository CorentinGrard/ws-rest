const express = require('express');
const router = express.Router();
const service = require('./service');

var session = require("express-session");
const Keycloak = require("keycloak-connect");
var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({
  store: memoryStore
});


// routes
router.get('/vol/:id', keycloak.protect(), vol);
router.get('/vol', keycloak.protect(), vols);
router.get('/set', keycloak.protect(), set);

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
  service.set()
    .then((v) => res.json(v))
    .catch(err => next(err));
}