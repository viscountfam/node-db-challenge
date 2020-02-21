const db = require('../data/db-config.js')
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findTasks,
    findResources
}

function find(){
    return db('Projects')
}

function findById(id) {
    return db('Projects')
    .where({id})
    .first()
}

function add(project) {
    return db('Projects')
    .insert(project, 'id')
}

function update(changes, id) {
    return db('Projects')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('Projects')
    .where({id})
    .del()
}

function findTasks(project_id) {
    return db('Projects')
    .where({project_id})
}

function findResources(project_id) {
    return db('Projects')
    .where({project_id})
}