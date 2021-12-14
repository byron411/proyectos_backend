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
        login:async(parent, args)=>{
            const elbuscado=await UserModel.findOne({
                correo:args.correo,
                
            });
            
            if(elbuscado){
                const comparacion= await bcrypt.compare(args.password, elbuscado.password)
                console.log('este es el resultado de su comparación', comparacion);
                if(comparacion){
                    return {
                        token:generateToken({
                            _id:elbuscado._id,
                            nombre:elbuscado.nombre,
                            apellido:elbuscado.apellido,
                            identificacion:elbuscado.identificacion,
                            correo:elbuscado.correo,
                            rol:elbuscado.rol
                        }),
                    };
                }
                else{
                    return{
                        token:'incorrectpass'
                    }
                }
                
            }
            else{
                console.log('Usuario no encontrado')
                return{
                    token:'notuser'
                }
            }
           
        },
        refreshToken:async(parent,args, context)=>{
            console.log('el context ',context);
            
            if (!context.userData){
                return{
                    error:'Token no valido',
                }
            }
                else{
                    //console.log('tenemos userData lo que signigica que token esta ok');
                    return {
                        token:generateToken({
                            _id:context.userData._id,
                            nombre:context.userData.nombre,
                            apellido:context.userData.apellido,
                            identificacion:context.userData.identificacion,
                            correo:context.userData.correo,
                            rol:context.userData.rol,
                        }),
                    };
                }
            
        }
    },
}
export {resolversAutenticacion};