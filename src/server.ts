import http from 'http';
import App from './app'
import { openDatabaseConnection } from './db/db';


const startServer = async () =>{
    const httpServer = http.createServer(App)
    await openDatabaseConnection()


httpServer.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})
}
startServer()