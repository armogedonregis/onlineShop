export interface Product {
    id: number
    category: string
    title: string
    price: number
    raiting: number
    imageUrl: string
    brand: string
    country: string
}

export interface Cart {
    id: number
    title: string
    prices: number
    Productid: number
    total: number
}

export interface Storage {
    getItem(key: string): string | null
    setItem(key: string, value: string): void
    removeItem(key: string): void
}