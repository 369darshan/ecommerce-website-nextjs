'use client'

import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';

const ShoppingCartModal = () => {

  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick}>
      <SheetContent className='sm:max-w-lg w-[99vw]'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>

        </SheetHeader>
        <div className='h-full flex flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className='-my-6 divide-y divide-gray-200'>
              {cartCount === 0 ? (
                <h1 className='py-6'>You dont have any items</h1>
              ) : (
                <>{Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className='flex py-6'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                      <Image src={entry.image as string} alt='product image' width={100} height={100} />
                    </div>
                  </li>
                ))}</>
              )}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default ShoppingCartModal
