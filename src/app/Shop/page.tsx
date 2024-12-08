import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-[3%] '>


     {/* Image Section */}
     <section className="relative w-full lg:max-w-[1440px] mx-auto lg:h-[316px] h-[316px] ">
        <Image
          src="/shop.jpg"
          alt="bedroom"
          layout="fill"
          className="object-cover" // Use object-cover to maintain aspect ratio and cover the container
          priority
        />
      </section>

          {/* filter section */}
          <div className='bg-[#f9f1e7] w-full lg:max-w-[1440px] p-3 lg:h-[100px] flex flex-col lg:flex-row justify-between mx-auto pr-[8%] pl-[8%]'>
            <div className='flex items-center justify-between '>
            <Image
          src="/jj.PNG"
          alt="filter"
          width={450}
          height={60}
          className="object-cover" // Use object-cover to maintain aspect ratio and cover the container
          priority
        />
            </div>
            <div>
            <Image
          src="/yy.PNG"
          alt="filter"
          width={450}
          height={60}
          className="object-cover" // Use object-cover to maintain aspect ratio and cover the container
          priority
        />
            </div>

          </div>

          


          
{/* Products Section */}
<div className="flex flex-col justify-center items-center min-h-screen pt-[5%] pb-8">
  <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 p-4">
   

    {/* Grid of Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-5">
      <div>
        <Image
          src="/s1.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/p2.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s3.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s4.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s1.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
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
          src="/s3.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s4.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s1.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
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
          src="/s3.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      <div>
        <Image
          src="/s4.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
    </div>
  </div>
  {/* 123 section */}
  <div className='flex flex-row w-full lg:w-[392px] justify-between items-center pt-[5%] pr-3 pl-3'>
  <div className="flex items-center justify-center bg-[#b88e2f] w-[60px] h-[60px] text-center rounded-md text-white text-xl">1</div>
<div className="flex items-center justify-center bg-[#f9f1e7] w-[60px] h-[60px] text-center rounded-md text-black text-xl">2</div>
<div className="flex items-center justify-center bg-[#f9f1e7] w-[60px] h-[60px] text-center rounded-md text-black text-xl">3</div>
<div className="flex items-center justify-center bg-[#f9f1e7] w-[90px] h-[60px] text-center rounded-md text-black text-xl">Next</div>

  </div>
</div>

<div className="w-full lg:max-w-[1440px] bg-[#FAF3EA] mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly items-center gap-6 lg:gap-y-0 lg:h-[270px]">
  <div>
    <Image
      src="/ss1.jpg"
      alt="bedroom"
      width={310}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss2.jpg"
      alt="bedroom"
      width={310}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss3.jpg"
      alt="bedroom"
      width={300}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
  <div>
    <Image
      src="/ss4.jpg"
      alt="bedroom"
      width={300}
      height={70}
      className="object-contain max-w-full"
      priority
    />
  </div>
</div>


    </div>
  )
}

export default page