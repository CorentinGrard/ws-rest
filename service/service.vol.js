const db = require('../_helpers/db');

module.exports = {
  get,
  getAll
};

async function get(id) {
  let id_number = parseInt(id)
  return await db.asyncFindOne({
    id: id_number
  })
}

async function getAll() {
  return await db.asyncFind({})
}