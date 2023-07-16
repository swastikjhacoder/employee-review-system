const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost:27017/employee_review_system`);
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to the db'));
db.once('open', function () {
  console.log("Successfully connected to the Database:: MongoDB");
});
module.exports = db;
