const express = require('express');

const app = express();


const userrouter=require('../router/users/usersRouter.js');
const coursesrouter = require('../router/courses/coursesRouter.js');



app.use(userrouter, coursesrouter);



module.exports= app;


