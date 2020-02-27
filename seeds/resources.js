
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      const Resources = [
        {
          Project_id: 1,
          Name: "Computer",
          description: 'How could you do this without a computer'
        },
        {
          Project_id: 1,
          Name: "Internet Access",
          description: 'This is also a requirement for the project'
        },
        {
          Project_id: 1,
          Name: "An IDE Or Text Editor",
          description: 'Choose the app of your choice to make your thoughts a  reality'
        },
        {
          Project_id: 2,
          Name: "Computer",
          description: 'How could you do this without a computer'
        },
        {
          Project_id: 2,
          Name: "A logo",
          description: 'How could this happen without a logo'
        }
      ]
      return knex('Resources').insert(Resources);
    });
};
