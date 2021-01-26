let express = require('express');
let app = express();
let sequelize = require('./db');

let workout = require('./controllers/workoutcontroller');
// let user = require('./controllers/usercontroller');

sequelize.sync();

// app.use('/user', user);

app.use('/workout', workout);

app.listen(3000, function (){
    console.log('App is listening on port 3000');
})