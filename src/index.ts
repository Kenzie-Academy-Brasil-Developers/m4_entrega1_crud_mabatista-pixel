import { Product } from "./interfaces";
import { References } from "./interfaces";


class ProductList implements References {
    private productList: Product[] = [];

    id: number = 1;

    createProduct(data: {name: string, price: number}): Product {
        const newProduct = {
            id: this.id,
            name: data.name, 
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.productList.push(newProduct)
        this.id += 1;

        return newProduct;
    }

    getProducts(): Product[] {
        return this.productList;
    }

    getOneProduct(id: number): Product | undefined {
        const product = this.productList.find((element) => element.id === id)

        return product;
    }

    updateProduct(id: number, data: {name?: string; price?: number}): Product {
        const index = this.productList.findIndex((element) => element.id === id)

        const currentProduct = this.productList[index];

        const updatedProduct = {
            id,
            name: data.name !== undefined ? data.name : currentProduct.name,
            price: data.price !== undefined ? data.price : currentProduct.price,
            createdAt: currentProduct.createdAt,
            updatedAt: new Date(),
        }

        this.productList.splice(index, 1, updatedProduct)

        return updatedProduct;
    }

    deleteProduct(id: number): {message: string} {
        const index = this.productList.findIndex((element) => element.id === id)

        this.productList.splice(index, 1)

        return { message: "Product sucessfully deleted."}
    }

}

export const productList = new ProductList();
