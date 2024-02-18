'use client'
import { urlFor } from '@/lib/sanity';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';
import { ProductCart } from './AddToBag';


const CheckOutNow = ({ currency, description, image, name, price, price_id }: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId)
  }
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
        buyNow(price_id)
      }}
    >Checkout Now</Button>
  )
}

export default CheckOutNow
