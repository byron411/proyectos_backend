const resolvers={
    Query:{
        Usuarios:async(parent,args)=>{
            const usuarios=[
                {
                    nombre:"Byron",
                },
                {
                    nombre:"Gael",
                },
                {
                    nombre:"Melina",
                },
            ]
            return usuarios;
        }
    },
    
};
export {resolvers};