'use client'
import { urlFor } from '@/lib/sanity';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from './AddToBag';
import { Button } from './ui/button';


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
      variant={'outline'}
      onClick={() => {
        buyNow(price_id)
      }}
    >Checkout Now</Button>
  )
}

export default CheckOutNow
