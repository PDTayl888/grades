const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

app.use('/api/students', students);
app.use('/api/classses', classes);
app.use('/api/assignments', assignments);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;


console.log('poop');

