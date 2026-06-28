let items = [
    {
        id: 1, 
        codigo: "MAR-001", 
        nombre: "Martillo STANLEY", 
        categoria: "1", 
        precio: 130000, 
        stock: 34, 
        descripcion: "El martillo para clavos Stanley con un mango de madera resistente y cómodo, este martillo es perfecto para una variedad de tareas.",
    },
    {
        id: 2, 
        codigo: "TAL-100", 
        nombre: "Taladro STANLEY", 
        categoria: "2", 
        precio: 222900, 
        stock: 24,
        descripcion: "Taladro percutor de 600W, ideal para trabajos de construcción y mampostería.",
    }
];
let nextID = 3;

const itemService = {
    load(id){
        return items.find(item => item.id === id);
    },
    save(item){
        item.id=nextID++;
        items.push(item);
        return item;
    },
    update(updatedItem){
        const index = items.findIndex(item => item.id === updatedItem.id);
        if (index != -1){
            items [index] = updatedItem;
            return true;
        }
        return false;
    },
    delete(id){
        const initialLength = items.length;
        items = items.filter(item => item.id !== id);
        return items.length < initialLength;
    },
    list(){
        return items;
    }
}
export default itemService;