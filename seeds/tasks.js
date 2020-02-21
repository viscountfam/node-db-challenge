
exports.seed = function(knex) {
  return knex('Tasks').insert([
    {
      Project_id: 1,
      Name: 'Start the project',
      Description: 'Fork and Clone Repository',
      Notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      Project_id: 1,
      Name: 'Get the necessary Resources',
      Description: 'Install Dependencies',
      Notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      Project_id: 1,
      Name: 'Finish the project',
      Description: 'Design and Build API Endpoints',
      Notes: 'This is where the magic happens!',
    },
    {
      Project_id: 2,
      Name: 'We need a logo',
      Description: 'Design A Logo',
      Notes: 'A good logo is indicative of a good business',
    },
    {
      Project_id: 2,
      Name: 'We need a truck',
      Description: 'Buy A Truck',
      Notes: 'We probably should not get this secondhand',
    },
    {
      Project_id: 2,
      Name: 'Decide a food to cook',
      Description: 'Figure Out What Kind of Food We Want To Make',
      Notes: 'Whatever we choose will be good',
    }
  ]);
};