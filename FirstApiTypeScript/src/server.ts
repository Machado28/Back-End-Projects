import express from 'express'
import routes from './routes'

const server = express();

server.use(express.json());
server.use(routes)

server.listen(3333,()=> console.log('๐๐ o servidor estรก a pipocar no http://localhost:3333!'));
