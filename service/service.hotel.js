const db = require('../_helpers/db');
var soap = require('soap');

var url = 'http://'+process.env.SOAP_HOST+':'+process.env.SOAP_PORT+'/Hotel?wsdl';

module.exports = {
  get,
  getAll
};

async function get(id) {
  let hotel = await soap.createClientAsync(url)
  let chambre = await hotel.getChambreAsync(id);
  return chambre[0].return;
}

async function getAll() {
  let hotel = await soap.createClientAsync(url)
  let chambres = await hotel.getAllChambreAsync();
  return chambres[0].return;
}