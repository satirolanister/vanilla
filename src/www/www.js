const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');

const router = require('../router/indexRouter.js');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());
app.use('/api',router);



module.exports= app;