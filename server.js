const express = require('express');
const mysql = require('mysql');
const RegistrationRoutes = require('./routes/registration')
const ScreeningRoutes = require('./routes/screening')
const LoginRoutes = require('./routes/login')
const UserRoutes = require('./routes/user')
const UserStats = require('./routes/statistics')
const connection = require('./connection');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/registration', RegistrationRoutes);
app.use('/screening', ScreeningRoutes);
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
app.use('/statistics', UserStats);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on port ' + PORT)); 