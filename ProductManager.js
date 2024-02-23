class ProductManager {
    constructor() {
        this.products = [];
        this.productId = 1;
    }
    addProduct (title, description, price, thumbnail, code, stock) {
        //validamos que todos los campos sean obligatorios.
        if (!title || !description || !price || !thumbnail || !code || !stock === undefined) {
            console.error ("Todos los campos son obligatorios.");
        return;
        }
        //validamos que no se repita el producto utilizando su código para identificarlos.
        if (this.products.some((product) => product.code === code)) {
            console.log (`El producto con el código ${code} ya existe.`);
            return;
        }
        //agregamos cada producto con su ID autoincrementable.
        const newProduct = {
            id: this.productId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
        //devolvemos el producto recién agregado.
        return newProduct;
        }
        //obtenemos los productos creados.
        getProducts () {
            return this.products;
        }
        //obtenemos el producto por su ID.
        getProductsById (id) {
            const product = this.products.find((item) => item.id === id);
            if (!product) {
                console.error ("Producto no encontrado.");
                return;
            }
            return product;
        }
}

//Testing
//crear una instancia de la clase ProductManager.
const productManager = new ProductManager();

//se llamará a getProducts recién creada la isntancia, debe devolver un arreglo vacío.
console.log("getProducts recién creada la instancia de 'ProductManager', devuelve un arreglo vacío:");
console.log(productManager.getProducts());

//agregamos los productos mediante el método addProduct, (verificamos que cada uno se cree con su determinado ID).
console.log("Agregamos los productos mediante 'addProduct'.");
productManager.addProduct("Remera", "Vestimenta", 5000, "imgremera.jpg", "v1", 10000);
productManager.addProduct("Pantalon", "Vestimenta", 10000, "imgpantalon.jpg", "v2", 10000);
productManager.addProduct("Zapatillas", "Calzado", 20000, "imgzapatillas.jpg", "c1", 10000);
productManager.addProduct("Gorra con visera", "Accesorios", 6500, "imggorravisera.jpg", "a1", 10000);
productManager.addProduct("Vestido", "Vestimenta", 9000, "imgvestido.jpg", "v3", 10000);

//obtendremos los productos agregados mediante el método getProducts, al cual llamaremos nuevamente.
console.log("'getProducts' tras agregar los productos: Devuelve el Array con los productos recién agregados.");
console.log(productManager.getProducts());

//probaremos mediante addProduct, agregar un producto con los datos repetidos, debe arrojar un error por código repetido, ya que tomaremos el 'code' para identificar los productos en esta validación.
console.log("Ingresaremos un producto con el código duplicado para verificar que funciona la validación del método 'addProduct' en casos de productos repetidos:");
productManager.addProduct("Vestido", "Vestimenta", 9000, "imgvestido.jpg", "v3", 10000);
//mensaje de error en la línea 15 del archivo ProductManager.js

//utilizando el método getProductById debemos encontrar el producto mediante su ID.
console.log("Ejecutamos 'getProductById' para obtener un producto mediante su ID:");
console.log(productManager.getProductsById(1));

//el método getProductById debe devolver error si no encuentra el producto.
console.log("Ingresaremos un ID inexistente para verificar que funciona la validación del método 'getProductById':")
console.log(productManager.getProductsById(15));
console.log("Lo sentimos. No pudimos encontrar el producto.");

