const app = require('./app');
//.env file for database connection
require('dotenv').config();

//start app
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`)
});