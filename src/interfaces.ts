export interface Product {
    id: number,
    name: string, 
    price: number, 
    createdAt: Date,
    updatedAt: Date
}

export interface References {

    createProduct(data: {name: string, price: number}): Product;

    getProducts(): Product[];
        
    getOneProduct(id: number): Product | undefined;
     
    updateProduct(id: number, data: {name: string, price: number}): Product;

    deleteProduct(id: number): {message: string};   
}