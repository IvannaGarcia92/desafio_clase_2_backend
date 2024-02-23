/*
class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que no se repita el campo "code" y que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos son obligatorios.");
        return;
        }

        if (this.products.some((product) => product.code === code)) {
            console.log(`El producto con el código ${code} ya existe.`);
        return;
        }

         // Agregar el producto con un ID autoincrementable
        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            console.log("Producto no encontrado.");
        return;
        }
        return product;
    }
}
// Crear una instancia de la clase ProductManager
const productManager = new ProductManager();

// Prueba 1: getProducts debe devolver un arreglo vacío
console.log("Prueba 1 - getProducts (arreglo vacío):");
console.log(productManager.getProducts());

// Prueba 2: addProduct con campos especificados
console.log("Prueba 2 - addProduct con campos especificados:");
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Prueba 3: getProducts al agregar un producto
console.log("Prueba 3 - getProducts al agregar un producto:");
console.log(productManager.getProducts());

// Prueba 4: addProduct con los mismos campos (debe arrojar un error)
console.log("Prueba 4 - addProduct con campos repetidos (debe arrojar un error):");
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Prueba 5: getProductById debe encontrar el producto recién agregado
console.log("Prueba 5 - getProductById para producto recién agregado (ID 1):");
console.log(productManager.getProductById(1));

// Prueba 6: getProductById debe devolver error si no encuentra el producto
console.log("Prueba 6 - getProductById para ID inexistente (ID 3, debe arrojar un error):");
console.log(productManager.getProductById(3));

function resetProductManagerState() {
    productManager.products = [];
    productManager.productIdCounter = 1;
}

// Reinicia el estado de ProductManager antes de realizar las pruebas
resetProductManagerState();

*/