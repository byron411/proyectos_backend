import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import conexion from './db/db.js';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { validateToken } from './utils/tokenUtils.js';


dotenv.config();

const getUserData = (token) => {
    const verificacion = validateToken(token.split(' ')[1]);
    return verificacion;
    
  };
const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;
      
      
      if (token){
          const userData=getUserData(token);
          return userData;
      }
      else{
          return null;
      }      
     
    },
  });

const app = express();
app.use(express.json());
app.use(cors());
app.listen({port:process.env.PORT || 4000},async ()=>{
    await conexion();
    await server.start();
    server.applyMiddleware({app});
    console.log('Servidor listo')
})