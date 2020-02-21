exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      const projects = [
        {
          Name: "Complete Node.js and database challenge",
          Description:
            "This is the the api challenge that it the sprint for the db week of the backend section",
          Completed: false
        },
        {
          Name: "Start a food cart",
          Description: "My friends and I want to start a food cart",
          Completed: false
        },
        {
          Name: "Build a movie app",
          Description: "This is the the app I want to build",
          Completed: false
        },
        {
          Name: "Go shopping",
          Description: "I need to buy things from the store",
          Completed: false
        },
        {
          Name: "Complete a new poem",
          Description: "I want to write a poem about all the stuff I'm making",
          Completed: false
        }
      ];

      return knex("Projects").insert(projects);
    });
};
