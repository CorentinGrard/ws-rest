const { AsyncNedb } = require('nedb-async')
 
const db = new AsyncNedb({
  filename: 'data.db',
  autoload: true,
})

module.exports = db