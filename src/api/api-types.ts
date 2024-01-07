
export type BootsEntityType = {
    _id: string
    name: string
    price: number
    provider: string
    category: string
    is_in_inventory: boolean,

    sizes: SizeType[]
    imageURL: string
}

type SizeType = {
    size: number
    count: number
}