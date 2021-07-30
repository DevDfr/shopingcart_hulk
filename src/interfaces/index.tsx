export interface IAuth {
    username: string,
    password: string
}

export interface IProduct {
    id: string
    category: string
    net_content: string
    price_real: number
    stock: number
    thumbnail: string
    title: string
    units_sf: number
}

export interface INewProduct {
    category: string
    net_content: string
    price_real: number
    stock: number
    thumbnail: string
    title: string
    units_sf: number
}

export interface IOrder{
    id: string
    units: number
}