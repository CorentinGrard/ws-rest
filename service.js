const db = require('./_helpers/db');

module.exports = {
  get,
  getAll,
  set
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

async function set() {
  return await db.asyncInsert([{
      "id": 1,
      "company": 'Japan Airline',
      "place": "57D",
      "date": "15/12/2019"
    },
    {
      "id": 2,
      "company": 'Air France',
      "place": "58D",
      "date": "15/12/2019"
    },
    {
      "id": 3,
      "company": 'Japan Airline',
      "place": "12A",
      "date": "15/08/2019"
    },
    {
      "id": 4,
      "company": 'Japan Airline',
      "place": "4D",
      "date": "15/12/2017"
    },
    {
      "id": 5,
      "company": 'Air France',
      "place": "24F",
      "date": "01/12/2019"
    },
    {
      "id": 6,
      "company": 'Air China',
      "place": "57D",
      "date": "15/12/2019"
    },
  ])
}