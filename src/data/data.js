const products = [
    {
        id: "celda123",
        name: "productos 1",
        descripcion:"description 1",
        price: 1500,
        stock: 9,
        category:"productos",
        image:"/image/collares.jpg"
    },
    {
        id: "celf223",
        name: "productos 2",
        descripcion:"description 2",
        price: 100,
        stock: 10,
        category:"contactos",
        image:"/image/mariposa1.jpg"
    },
    {
        id: "cool323",
        name: "productos 3",
        descripcion:"description 3",
        price: 1840,
        stock: 5,
        category:"productos",
        image:"/image/aretes1.jpg"
    },
    {
        id: "cel424",
        name: "productos 4",
        descripcion:"description 4",
        price: 1300,
        stock: 8,
        category:"productos",
        image:"/image/anillos.jpg"
    },
    {
        id: "celda425",
        name: "productos 5",
        descripcion:"description 5",
        price: 5200,
        stock: 9,
        category:"inicio",
        image:"/image/arete2.jpg"
    }, 
    {
        id: "gal463",
        name: "productos 6",
        descripcion:"description 6",
        price:2500,
        stock: 11,
        category:"inicio",
        image:"/image/anillo.jpg"
    }
]
//obtener productos
const getProducts = ()=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
        }, 3000);
    });
};

export default getProducts