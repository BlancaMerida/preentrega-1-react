const products = [
    {
        id: "celda123",
        name: "Kit de Cogantes",
        descripcion:"Cadena regulable de 45 a 50cm más dije de estrella con cubic",
        price: 1500,
        stock: 9,
        category:"cadenas",
        image:"/image/collares.jpg"
    },
    {
        id: "celf223",
        name: "Collar Men",
        descripcion:"Cadena de plata 925 40cm + dije de piedra natural con diamante",
        price: 3500,
        stock: 10,
        category:"cadenas",
        image:"/image/collar.jpg"
    },
    {
        id: "cool323",
        name: "Kit de yojas",
        descripcion:"Set completo aretes/pulsera/collar acero blanco",
        price: 1840,
        stock: 5,
        category:"aros",
        image:"/image/aretes1.jpg"
    },
    {
        id: "cel424",
        name: "Anillo Flower",
        descripcion:"Plata Rose con micropave",
        price: 1300,
        stock: 8,
        category:"anillos",
        image:"/image/anillos.jpg"
    },
    {
        id: "celda425",
        name: "Aretes Diana",
        descripcion:"Aros con cierre huggies de acero dorado, micropave y cubic",
        price: 5200,
        stock: 9,
        category:"aros",
        image:"/image/arete2.jpg"
    }, 
    {
        id: "gal463",
        name: "Anillo de anne",
        descripcion:"Anillo de acero 925 y cubic",
        price:2500,
        stock: 11,
        category:"anillos",
        image:"/image/anillo.jpg"
    },
    {
        id: "eco492",
        name: "Collas Kids",
        descripcion:"Cadena con unicornio y arcoiris - largo 50cm ",
        price:2500,
        stock: 11,
        category:"cadenas",
        image:"/image/collar-con-colgante.jpg"
    },
    {
        id: "eco624",
        name: "Collares Surtidas",
        descripcion:"Cadena con surtidas de acero dorado - largo 50cm ",
        price:3800,
        stock: 15,
        category:"cadenas",
        image:"/image/dijes-oro.jfif"
    },
    {
        id: "sut584",
        name: "Dijes Kids",
        descripcion:"Dijes kids de acero dorado",
        price:4300,
        stock: 12,
        category:"cadenas",
        image:"/image/dijes.webp"
    },
    {
        id: "sut582",
        name: "Kit de Pulseras",
        descripcion:"Kit de pulseras especial para regalar acero blanco",
        price:6000,
        stock: 11,
        category:"anillos",
        image:"/image/kit-de-pulseras-2.jfif"
    },
    {
        id: "rel463",
        name: "Pulsera de hombre",
        descripcion:"Pulsera de plata 925",
        price:4900,
        stock: 8,
        category:"anillos",
        image:"/image/pulsera-de-hombre.jfif"
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