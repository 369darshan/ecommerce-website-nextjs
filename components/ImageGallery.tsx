"use client"
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React, { useState } from 'react'

interface iAppProps {
  images: any;
}

const ImageGallery = ({ images }: iAppProps) => {

  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image)
  }

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {
          images.map((image: any, idx: any) => (
            <div key={idx} className='overflow-hidden cursor-pointer rounded-lg bg-gray-100'>
              <Image src={urlFor(image).url()} height={200} width={200} alt='product image' onClick={() => handleSmallImageClick(image)}></Image>
            </div>
          ))
        }
      </div>
      <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
        <Image src={urlFor(bigImage).url()} height={500} width={500} alt='big Image' className='h-full w-full object-cover object-center' />
        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span>
      </div>
    </div>
  )
}

export default ImageGallery
