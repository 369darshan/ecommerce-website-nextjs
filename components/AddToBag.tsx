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
    price_id: string;
}
const AddToBag = ({ currency, description, image, name, price, price_id }: ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
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
