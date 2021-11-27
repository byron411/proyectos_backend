import { UserModel } from "../models/users";

const resolvers={
    Query:{
        Usuarios: async(paren,args)=>{
            const usuarios =['pepito','omar'];
            return usuarios;
        },
    },
};
    
export {resolvers};