const db = require('../data/db-config.js')
module.exports = {

}

function find(){
    return db('Projects')
}

function findById(id) {
    return db('Projects')
    .where({id})
    .first()
}

