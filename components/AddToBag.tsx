'use client'
import { urlFor } from '@/lib/sanity';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}
const AddToBag = ({ currency, description, image, name, price }: ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: 'asdf'
    }
    return (
        <Button
            onClick={() => {
                addItem(product), handleCartClick();
            }}
        >Add To Cart</Button>
    )
}

export default AddToBag
