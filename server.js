const express = require("express");
var session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./_helpers/error-handler");
const Keycloak = require("keycloak-connect");
var cors = require('cors')
require('dotenv').config()

const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openapi.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use(bodyParser.json());

var memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: "secret secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

var keycloak = new Keycloak({
  store: memoryStore
}, {
  "realm": "ws",
  "bearer-only": true,
  "auth-server-url": "http://" + process.env.KEYCLOAK_HOST + ":" + process.env.KEYCLOAK_PORT + "/auth",
  "ssl-required": "none",
  "resource": "wsapi",
  "confidential-port": 0,
  "secret": process.env.KEYCLOAK_SECRET
});

app.use(
  keycloak.middleware()
);

// api routes
app.use("/api/v1/vol", keycloak.protect(), require("./controller/controller.vol"));
app.use("/api/v1/hotel", keycloak.protect(),require("./controller/controller.hotel"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});