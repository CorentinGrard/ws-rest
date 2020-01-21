const express = require('express');
const router = express.Router();
const service = require('./service');

var session = require("express-session");
const Keycloak = require("keycloak-connect");
var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({
  store: memoryStore
}, {
  "realm": "ws",
  "bearer-only": true,
  "auth-server-url": "http://" + process.env.KEYCLOAK_HOST + ":" + process.env.KEYCLOAK_PORT + "/auth",
  "ssl-required": "none",
  "resource": "wsapi",
  "confidential-port": 0,
  "secret": "81647493-57ad-4822-bd4b-6fa94a22de40"
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