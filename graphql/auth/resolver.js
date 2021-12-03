import { UserModel } from "../../models/usuario/usuario.js";

const resolversAutenticacion={
    Mutation:{
        registro:async(parent, args)=>{
            const elregistrado=await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password:args.password,
            });
            console.log("usuario creado",elregistrado);
            return "hemos agregado a ";
        },
        
    }
}
export {resolversAutenticacion};