const express = require('express');
require('dotenv').config();
const apicache = require('apicache');
const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT  || 3000;

const v1Router = require('./v1/routes')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cache("2 minutes"));

app.get('/',(req,res) => {
    res.send("<h1>It's fu--ing work!!!!</h1>");
})

app.use("/api/v1",v1Router);

app.use("/api/v1/workouts",v1WorkoutRouter);

app.listen(PORT,() => {
    console.log(`Api is listening at port: ${PORT}`);
})