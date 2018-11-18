
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('user', 30).notNullable();
      table.string('password', 30).notNullable();
      table.specificType('msg','text[][]');
      table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  
};



// CREATE TABLE users (
// id SERIAL primary key,
// my_user VARCHAR(30) not null,
// password VARCHAR(30) not null,
// msg TEXT[]
// );

