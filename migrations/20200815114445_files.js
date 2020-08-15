
exports.up = function(knex) {
    return knex.schema.createTable('files', (table) => {
       // table.increments('id').primary()
        table.string('location')
        table.string('id')
    })
};

exports.down = function(knex) {
  
};
