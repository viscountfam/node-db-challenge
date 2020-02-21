
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments()
      tbl.string('Name', 256)
      .notNullable()
      .index()

      tbl.string('Description', 1000)
      tbl.boolean('Completed')
      .notNullable()
      .defaultTo(false)
  })

  .createTable('Resources', tbl => {
      tbl.increments()
      tbl.string('Name', 256)
      .notNullable()
      tbl.string('Description', 700)
      tbl.integer('Project_Id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  })

  .createTable('Tasks', tbl => {
      tbl.increments()
      tbl.string('Name', 512)
      .notNullable();
      tbl.string('Description', 600)
      tbl.string('Notes', 500)
      tbl.boolean('Completed')
        .notNullable()
        .defaultTo(false)
      tbl.integer('Project_Id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('Projects'), knex.schema.dropTableIfExist('Resources'), knex.schema.dropTableIfExists('Tasks')
};
