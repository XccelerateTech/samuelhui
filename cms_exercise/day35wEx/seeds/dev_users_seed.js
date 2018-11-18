
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, my_user: 'admin', password: 'admin', msg:'{"hello","good morning","i am sexy and i know it"}'},
        {id: 2, my_user: 'sam', password: 'sam', msg:'{"hello","good morning","i am sexy and i know it"}'},
        {id: 3, my_user: 'tom', password: 'tom', msg:'{"hello","good morning","i am sexy and i know it"}'},       
      ]);
    });
};
