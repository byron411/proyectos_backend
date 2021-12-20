import mongoose from "mongoose";

const conexion=async ()=>{
    return await mongoose 
    .connect(process.env.DATABASE_URL)
                            
    .then(()=>{
        console.log('conexion exitosa');
    })
    .catch((e)=>{
        console.log('Error conectandose a la bd',e)
    });
}
export default conexion;