let users = [
    {id: 1,apellido:"Orlando",nombre:"Matias",cuenta:"Orlanditomatias",perfil:"Administrador",correo:"Orlandito20@google.com",clave:"Orlando123",confirmarClave: "orlando123"},
    {id: 2,apellido:"Gonzalez",nombre:"Arturo",cuenta:"ArturGonza",perfil:"Operador",correo:"ArturGonza@google.com",clave:"Gonzalez123",confirmarClave: "Gonzalez123"}

];
let nextID = 2;


const userService = {
    load(id){
        return users.find(user => user.id === id);
    },
    save(user){
        user.id=nextID++;
        users.push(user);
        return user;
    },
    update(updatedUser){
        const index = users.findIndex(user => user.id === updatedUser.id);
        if (index != -1){
            users [index] = updatedUser;
            return true;
        }
        return false;
    },
    delete(id){
        const initialLength = users.length;
        users = users.filter(user => user.id !== id);
        return users.length < initialLength;
    },
    list(){
        return users;
    }
}
export default userService;