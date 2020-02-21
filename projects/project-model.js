const db = require('../data/db-config.js')
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findTasks,
    findResources,
    addTask,
    addResource
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

function findTasks(Project_id) {
    return db('Tasks')
    .where({Project_id})
}

function findResources(Project_id) {
    return db('Resources')
    .where({Project_id})
}

function addTask(Project_id, task) {
    newTask = {
        ...task,
        Project_id: Project_id
    }
    return db('Tasks')
    .insert(newTask, "id")

}

function addResource(Project_id, resource) {
    newResource = {
        ...resource,
        Project_id: Project_id
    }
    return db('Resources')
    .insert(newResource, "id")
}