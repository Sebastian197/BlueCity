const express = require('express');
const app = express();

//process.env.PORT -> search variable PORT
app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

// Put all routers of server
app.use(require('./src/routes/usersRoutes'));
app.use(require('./src/routes/parkingsRoutes'));
app.use(require('./src/routes/boxesRoutes'));
app.use(require('./src/routes/scootersRoutes'));
app.use(require('./src/routes/sequelizemetaRoutes'));


app.listen(app.get('PORT'), () => {
    console.log(`SERVER IN PORT ${app.get('PORT')}`);
});