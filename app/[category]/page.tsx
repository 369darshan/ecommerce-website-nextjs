import React from 'react';
import { client } from '@/lib/sanity';
import category from '@/sanity/schemas/category';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';



const getData = async (category: string) => {
  const query = `*[_type=="product"&& category->name=="${category}"]{
    _id,
    "imageUrl":images[0].asset->url,
    price,
    name,
    "slug":slug.current,
    "categoryName":category->name
  }`;

  const data = await client.fetch(query);
  return data;

}
export const dynamic = "force-dynamic";

const Categorypage = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category)
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our Products for {params.category}</h2>
          <Link href="/all" className='text-primary flex items-center gap-x-1'>See All{" "}
            <span><ArrowRight /></span>
          </Link>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            data.map((product) => (
              <div key={product._id} className='group relative'>
                <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                  {product.imageUrl &&
                    <Image src={product.imageUrl} alt='Product image' className='w-full h-full object-cover cursor-pointer object-center lg:h-full lg:w-full' width={300} height={300} />
                  }
                </div>
                <div className=' mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.categoryName}
                    </p>
                  </div>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Categorypage
