import jwt from 'jsonwebtoken'
const generateToken=(payload/*Es como un i en un for*/)=>{
    return jwt.sign(payload, 'secret',{
        expiresIn:'1h',
    });
}
export {generateToken};