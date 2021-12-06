import jwt from 'jsonwebtoken';

const  validateToken=(token)=>{
    if (token){
        const verification=jwt.verify(token,'secret',(err,data)=>{
            //console.log("Error: ",err,"Verificación: ", data);
            if (data){
                return data;
            }
            if (err){
                return {error:err,
                };
            }
        });
        return verification;
    }
}
const generateToken=(payload/*Es como un i en un for*/)=>{
    return jwt.sign(payload, 'secret',{
        expiresIn:'1h',
    });
}
export {generateToken, validateToken};