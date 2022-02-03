import { ConnectionOptions, createConnection } from 'typeorm'
import config from '../config/config.json'

export async function openDatabaseConnection(){
const conn = await createConnection({
type: "mysql",
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: "blog",
    entities: ["src/entities/*.ts"],
    synchronize: true
})



    if(!conn.isConnected){
        throw new Error('Connection to database failed');
    }
    return conn;
};