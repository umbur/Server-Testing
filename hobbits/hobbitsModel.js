const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const [id] = await db('hobbits').insert(hobbit)
  return db('hobbits')
  .where({ id })
  .first();
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
  let find = await findById(id)
  console.log(find)
  if (find.length !== 0) {
    await db('hobbits').delete().where('id',id)
    return id;
  } else {
    return 0
  }
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return db('hobbits').where('id',id);
}