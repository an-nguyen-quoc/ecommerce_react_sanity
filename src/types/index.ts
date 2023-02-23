export type Product = {
    _id: string
    name: string
    price: number
    image: any[]
    details: string
    slug: {
      current: string
    }
  }

export type CartProduct = Product & {quantity: number}

export type Banner = {
    buttonText: string
    desc: string
    image: any
    midText: string
    smallText: string
    product: string
    saleTime: string
    largeText1: string
    largeText2: string
    discount: string
}


export type HomeProps = {
    products: Product[]
    banner: Banner[]
}