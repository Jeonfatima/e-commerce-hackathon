import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
           {/* Image Section */}
     <section className="relative w-full lg:max-w-[1440px] mx-auto lg:h-[316px] h-[316px] ">
        <Image
          src="/cart.jpg"
          alt="cart"
          layout="fill"
          className="object-cover" // Use object-cover to maintain aspect ratio and cover the container
          priority
        />
      </section>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Container for cart section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Cart Table */}
        <div className="flex-1 bg-white rounded-md p-4">
 
  <div className="flex border-b py-2 bg-[#F9F1E7] font-semibold">
    <div className="flex-1 py-2 px-4">Product</div>
    <div className="flex-1 py-2 px-4">Price</div>
    <div className="flex-1 py-2 px-4">Quantity</div>
    <div className="flex-1 py-2 px-4">Subtotal</div>
  </div>


  <div className="flex flex-col md:flex-row md:space-x-4">
   
    <div className="flex flex-col md:flex-row md:w-full items-center border-b py-4">
      <div className="flex items-center flex-1 py-2 px-4">
        <Image
          src="/c1.jpg"
          alt="Asgaard sofa"
          className="w-[108px] h-[108px] object-cover rounded mr-4"
        />
        <span>Asgaard sofa</span>
      </div>
      <div className="flex-1 py-2 px-4">Rs. 250,000.00</div>
      <div className="flex-1 py-2 px-4">
        <input
          type="number"
          defaultValue="1"
          className="w-12 border border-gray-300 rounded px-2 text-center"
        />
      </div>
      <div className="flex-1 py-2 px-4">Rs. 250,000.00</div>
    </div>
  </div>
</div>





       

        {/* Right Section: Cart Totals */}
        <div
          className="w-full lg:w-[393px] lg:h-[390px]  bg-[#F9F1E7] rounded-md p-6"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Cart Totals</h2>
          <div className="flex justify-between py-2">
            <span className='text0lg'>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between py-2 border-t font-semibold mt-4">
            <span className='text-lg'>Total</span>
            <span className="text-yellow-500">Rs. 250,000.00</span>
          </div>
          <Link href="/Checkout">
          <button className="border border-black w-[222px] h-[59px] py-2 rounded-md shadow mx-auto ml-[10%] mt-[10%]">
    Check Out
  </button>
  </Link>
        </div>
        
      </div>
    </div>


   
<div className="w-full lg:max-w-[1440px] bg-[#FAF3EA] mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly items-center gap-6 lg:gap-y-0 lg:h-[270px] mt-[10%]">
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