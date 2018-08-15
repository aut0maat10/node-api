const noteRoutes = require('./noteRoutes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  // other route groups here later
};