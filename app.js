const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const productos = [
    
    {
        id: 1,
        nombre: "Celular",
        precio: 80000,
        img:
            "https://www.naldo.com.ar/medias/405929.1.jpg-300Wx300H?context=bWFzdGVyfHJvb3R8NzM2MnxpbWFnZS9qcGVnfGhlYy9oMzAvOTY3NTE2OTk4ODYzOC5qcGd8ZTliNjg0MDQyMjgzNmUwMDg1MjdmZDA4Yjk2Mzg0M2VkMDY2MmM5Y2FhMGQ1NjgwNjZhMjQ4ODY0MGYzMmExOA"
    },
    {
        id: 2,
        nombre: "televisor",
        precio: 120000,
        img:
            "https://www.naldo.com.ar/medias/Method-504802-1-300Wx300H?context=bWFzdGVyfGltYWdlc3w5NzY3fGltYWdlL2pwZWd8aW1hZ2VzL2hkMy9oYzgvOTYyOTQ3NDUyMTExOC5qcGd8NzU2ZDVjZjI5MWU4MGI5NmI2MDBlZmUxY2VmMmU2NmZjNmNiNWE5NTcxMWJmODk4MTQwMDE4MWIyYjBlZDFiYw"
    },

    {
        id: 3,
        nombre: "noteboock",
        precio: 150000,
        img:
            "https://www.naldo.com.ar/medias/405951.1.jpgs-300Wx300H?context=bWFzdGVyfHJvb3R8MTA3MzZ8aW1hZ2UvanBlZ3xoMjEvaDhlLzk2OTI4MTQxMTQ4NDYuanBnfDQzZTFiNDYwM2YzZDE0NjBiMThmYTVhOGM3ZDIwYjg4NmI3YjBlMzc1M2MwMTMzYzMxMTQ4YTM5ODAzMDU5OWQ"
    },
    {
        id: 4,
        nombre: "Impresora",
        precio: 60000,
        img:
            "https://www.naldo.com.ar/medias/Method-405673-1-515Wx515H?context=bWFzdGVyfGltYWdlc3w0NDg4NHxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGM1Lzk2MzkyNDg4NTUwNzAuanBnfGI1NmQ1NjJhZjYyYTI4MTM5OGY0NmM3OWUwY2Q3OGQ5Mzk3ZGZkNTNlYjU1OTg3MjhlNTQ0YzkzYjc5ZjQ4MDA"

    },
    {
        id: 5,
        nombre: "auriculares",
        precio: 30000,
        img:
            "https://www.naldo.com.ar/medias/Method-504558-1-515Wx515H?context=bWFzdGVyfGltYWdlc3wzNTE1N3xpbWFnZS9qcGVnfGltYWdlcy9oMGIvaDRlLzk1MzU2NjgzNTUxMDIuanBnfDA5ZjU2Nzc0NDM5MmJhMWIxOTc3Mzg5MWQxMDQyZTUwMjkyZDRhNGI5NDU0MWZlYzE0YTM5M2VjYTRkZDFkMDM"
    },
    {
        id: 6,
        nombre: "tablet",
        precio: 40000,
        img:
            "https://www.naldo.com.ar/medias/Method-405691-1-96Wx96H?context=bWFzdGVyfGltYWdlc3w4MTQ1fGltYWdlL2pwZWd8aW1hZ2VzL2g3OC9oY2IvOTY0MDIxMTg3MzgyMi5qcGd8M2RiOTM1ODU0ZDZkOThhOTVhM2ExMmE2YzBjMWIxNzNhNTcwZjE3ZGNiNzM4ZDhkM2IwNzY2YjkwMmU0YTRhOQ"
    },
];


let carrito = [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
     <img src="${product.img}">
     <h3>${product.nombre}</h3>
     <p class"price">${product.precio} $</p>
     `;
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });

    });
});
verCarrito.addEventListener ("click", () => {
    modalContainer.innerHTML = "" ;
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class= "modal-header-tittle">verCarrito</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("div");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;
        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div")
    totalBuying.className = "total.content";
    totalBuying.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalBuying)
});
   
