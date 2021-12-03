import { UserModel } from "../../models/usuario/usuario.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../../utils/tokenUtils.js";
//
const resolversAutenticacion={
    Mutation:{
        registro:async(parent, args)=>{
            const salt= await bcrypt.genSalt(10);
            const hashedPassword= await bcrypt.hash(args.password, salt);
            const elregistrado=await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password:hashedPassword
            });
            console.log("usuario creado");
            return {
                token:generateToken({
                    _id:elregistrado._id,
                    nombre:elregistrado.nombre,
                    apellido:elregistrado.apellido,
                    identificacion:elregistrado.identificacion,
                    correo:elregistrado.correo,
                    rol:elregistrado.rol
                }),
            };
        },
        
    }
}
export {resolversAutenticacion};