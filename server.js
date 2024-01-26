//Install express server
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

// Your API routes
app.get("/api/some-route", (req, res) => {
  // Handle the request here
  app.route(prefix + '/assignments')
    .get(assignment.getAssignments)
    .post(assignment.postAssignment);

  app.route(prefix + '/assignments/:id')
    .get(assignment.getAssignment)
    .delete(assignment.deleteAssignment)
    .put(assignment.updateAssignment);

  app.route(prefix + '/assignments/:id/rendu')
    .put(assignment.updateRendu);

  app.route(prefix + '/user')
    .post(user.createUser);

  app.route(prefix + '/user/authenticate')
    .post(user.authenticateUser);

  app.route(prefix + '/users')
    .get(user.getUsers);

});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/assignment-app/"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/assignment-app/index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);
