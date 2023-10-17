
export type Card = {
    id: number,
    name: string,
    edition: string,
    image: string,
    stock: number,
    price: number
}

export type CardProduct = {
    card: Card,
    amount: number
}

export type Cart = CardProduct[]