const resolversAutenticacion={
    Mutation:{
        registro:async(parent, args)=>{
            console.log('crear usuario', args);
            return 'Usuario creado';
        },
        
    }
}
export {resolversAutenticacion};