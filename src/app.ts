import express from 'express';
import {Connection, createConnection, ConnectionOptions} from 'typeorm';
const App = express();
App.use(express.json())
import router from './routes/index';




App.use(router);

App.get('/',(req, res ) => {
    res.json({message: 'Hello!'})
});

export = App;