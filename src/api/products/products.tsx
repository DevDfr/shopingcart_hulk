import axios from 'axios'
import { IProduct, INewProduct } from '../../interfaces';

export const getApiProducts = (): Promise<IProduct[]> => {

    return new Promise(resolve => {

        axios({
            method: 'GET',
            url: 'https://appwad-70c05-default-rtdb.firebaseio.com/productos.json', 
            params: {
                auth: localStorage.getItem('token')
            }
        }).then(resp => {
            const arrProducts: IProduct[] = Object.keys(resp.data).map(item => {
                return {
                    ...resp.data[item],
                    id: item
                }
            })
            resolve(arrProducts) 
        })

    })

}


export const updateStockApiProduct = (product: IProduct): Promise<boolean> => {

    return new Promise(resolve => {

        axios({
            method: 'PATCH',
            url: `https://appwad-70c05-default-rtdb.firebaseio.com/productos/${product.id}.json`,
            data: {
                stock: product.stock,
            },
            params: {
                auth: localStorage.getItem('token')
            }
        }).then(resp => {
            resolve(true)
        }).catch(err => {
            resolve(false)
        })

    })

}


export const insertNewApiProduct = (newProduct: INewProduct): Promise<IProduct> => {

    return new Promise(resolve => {

        axios({
            method: 'POST',
            url: `https://appwad-70c05-default-rtdb.firebaseio.com/productos.json`,
            data: {
                ...newProduct
            },
            params: {
                auth: localStorage.getItem('token')
            }
        }).then(resp => {

            resolve({
                id: resp.data.name,
                ...newProduct
            })

        })

    })

}