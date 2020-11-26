const express = require('express');

const app = express();


const userrouter=require('../router/users/usersRouter.js');
const coursesrouter = require('../router/courses/coursesRouter.js');
const enrollrouter = require('../router/enroll/enrollRouter.js');



app.use(userrouter, coursesrouter, enrollrouter);



module.exports= app;


