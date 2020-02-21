
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      Project_id: 1,
      Description: 'Fork and Clone Repository',
      Notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      Project_id: 1,
      Description: 'Install Dependencies',
      Notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      Project_id: 1,
      Description: 'Design and Build API Endpoints',
      Notes: 'This is where the magic happens!',
    },
    {
      Project_id: 2,
      Description: 'Design A Logo',
      Notes: 'A good logo is indicative of a good business',
    },
    {
      Project_id: 2,
      Description: 'Buy A Truck',
      Notes: 'We probably should not get this secondhand',
    },
    {
      Project_id: 2,
      Description: 'Figure Out What Kind of Food We Want To Make',
      Notes: 'Whatever we choose will be good',
    },
  ]);
};