import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link';

const page = () => {
  return (
    <div className='pt-[10%] p-5'>   
        <div className="max-w-[1400px] mx-auto px-4 py-8 border-b border-gray-500">
    {/* Main grid container */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
      {/* Left Section: Product Images */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Thumbnail Images */}
        <div className="flex lg:flex-col gap-4">
          <div className="w-20 h-20 relative">
            <Image
              src="/sofa1.jpg"
              alt="Thumbnail 1"
              layout="fill"
              className="object-cover rounded-md border border-gray-300"
            />
          </div>
          <div className="w-20 h-20 relative">
            <Image
              src="/sofa2.jpg"
              alt="Thumbnail 2"
              layout="fill"
              className="object-cover rounded-md border border-gray-300"
            />
          </div>
          <div className="w-20 h-20 relative">
            <Image
              src="/sofa3.jpg"
              alt="Thumbnail 3"
              layout="fill"
              className="object-cover rounded-md border border-gray-300"
            />
          </div>
          <div className="w-20 h-20 relative">
            <Image
              src="/sofa4.jpg"
              alt="Thumbnail 4"
              layout="fill"
              className="object-cover rounded-md border border-gray-300"
            />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="flex-1 relative bg-[#F9F1E7]">
          <Image
            src="/sofamain.jpg"
            alt="Main Product"
            layout="responsive"
            width={423}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">Asgaard Sofa</h1>
        <h3 className="text-lg text-gray-500 mb-4">Rs. 250,000.00</h3>

        {/* Ratings */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            ★★★★★
          </div>
          <span className="text-sm text-gray-500">(5 Customer Review)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Options */}
        <div className="mb-4">
          <span className="font-medium">Size: </span>
          <div className="flex items-center gap-2 mt-2">
            <button className="px-4 py-2 bg-gray-200 rounded-md">L</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">XL</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">XS</button>
          </div>
        </div>

        {/* Color Options */}
        <div className="mb-4">
          <span className="font-medium">Color: </span>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button className="px-4 py-2">-</button>
            <input
              type="number"
              defaultValue="1"
              className="w-[123px] h-[64px] text-center border-l border-r border-gray-300"
            />
            <button className="px-4 py-2">+</button>
          </div>
          <button className="px-6 py w-[215px] h-[64px] rounded-md border border-black">
            Add To Cart
          </button>
          <button className="px-6 py-2 border w-[215px] h-[64px] border-gray-300 rounded-md hover:bg-gray-200">
            + Compare
          </button>
        </div>

       
      </div>
    </div> 
     {/* Additional Information */}
    
<div className="lg:flex lg:justify-end lg:max-w-[1000px] lg:pt-10 text-gray-500">
  <div className="text-xl space-y-2 lg:text-right">
    <div className="text-left">
      <span className="font-medium">SKU:</span> SS001
    </div>
    <div className="text-left">
      <span className="font-medium">Category:</span> Sofas
    </div>
    <div className="text-left">
      <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
    </div>
    <div className="flex flex-row justify-start text-left">
      <span className="font-medium pt-1">Share:</span>
      <div className="flex gap-2 mt-2">
        <FaFacebook className="text-xl" />
        <IoLogoLinkedin className="text-xl" />
        <AiFillTwitterCircle className="text-xl" />
      </div>
    </div>
  </div>
</div>



  </div>

       {/* description */}
           <div className='flex flex-col w-full lg:max-w-[1440px] mx-auto pt-8'>
            <div className='flex flex-col lg:flex-row lg:max-w-[649px] mx-auto text-2xl justify-evenly gap-8 font-bold'>
                  <div>Description</div>
                  <div className='text-gray-500'>Additional Information</div>
                  <div className='text-gray-500'>Reviews[5]</div>

            </div>

            <div className='w-full lg:max-w-[1024px] mx-auto pt-10 text-gray-500'>
            <p className="mb-4 text-md">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo
          speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the
          show on the road.
        </p>
        <p className="mb-4 text-md">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
          engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
          compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
          you to fine-tune the controls to your personal preferences while the guitar-influenced
          leather strap enables easy and stylish travel.
        </p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center lg:max-w-[1239px] mx-auto gap-6 mt-5'>
              <div className='lg:max-w-[645px] lg:h-[308px]'>
              <Image
          src="/white1.jpg"
          alt="bedroom"
          width={645}
          height={308}
          className="object-cover" 
          priority
        />
              </div>
              <div className='lg:max-w-[645px] lg:h-[308px]'>
              <Image
          src="/white2.jpg"
          alt="bedroom"
          width={645}
          height={308}
         className="object-cover" 
          priority
        />
              </div>

            </div>


           </div>




         
{/* Products Section */}
<div className="flex flex-col justify-center items-center min-h-screen pb-8">
  <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 p-4">
    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">Related Products</h1>
    </div>

    {/* Grid of Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-5">
      <Link href="/Individual">
      <div>
        <Image
          src="/p1.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      </Link>
      <div>
        <Image
          src="/s2.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/p3.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/p4.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
     
    </div>
  </div>
  <button className="border border-yellow-600 w-[245px] h-[48px] rounded-md mt-6 text-yellow-600 text-lg">Show More</button>
</div>
  
</div>
  )
}

export default page
