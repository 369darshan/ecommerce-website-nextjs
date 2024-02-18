import AddToBag from '@/components/AddToBag';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/sanity';
import { Star, TruckIcon } from 'lucide-react';
import { fullProduct } from '../../interface';
import CheckOutNow from '@/components/CheckOutNow';

const getData = async (slug: string) => {
  const query = `*[_type== "product" && slug.current == "${slug}"][0]{
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName":category->name,
    price_id
  }`;
  const data = await client.fetch(query)
  return data;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug)
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images} />
          <div className='md: py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-500'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{data.name}</h2>
            </div>
            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className='rounded-full gap-x-2'>
                <span className='text-sm'>4.3</span>
                <Star className='h-5 w-5' />
              </Button>
              <span className='text-sm text-gray-500'>65 Ratings</span>
            </div>
            <div className='mb-4'>
              <div className='flex text-end gap-2'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>${data.price}</span>

                <span className='mb-0.5 text-red-800 line-through'>${data.price + 20}</span>
              </div>
              <span className='text-sm text-gray-500'>
                Incl. Vat plus shipping
              </span>
            </div>
            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <TruckIcon />
              <span className='text-sm'>2-4 Day Shipping</span>
            </div>
            <div className='flex gap-2.5'>
              <AddToBag
                currency='USD'
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
              <Button variant={'outline'}>Checkout now</Button>
              {/* <CheckOutNow name={data.name} description={data.description}image={data.images}price={data.price}price_id={data.price_id}/> */}
            </div>
            <p className='mt-12 text-base text-gray-500 tracking-wider'>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
