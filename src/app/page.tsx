import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <div>

      {/* Image section */}
<div className="relative w-full h-[716px] mt-4">
  {/* First image as background with max-width 1440px */}
  <div className="max-w-[1440px] w-full h-full mx-auto relative">
    <Image
      src="/hero.jpg"
      alt="sofa"
      width={1440}
      height={716}
      className="object-cover w-full h-full"
    />

    {/* Content Box inside the background image with gap on right */}
    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#fff3e3] p-8 rounded-xl w-[643px] h-[443px] flex flex-col justify-between mr-[50px]">
      {/* Title and Text */}
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold text-gray-800">New Arrival</h3>
        <h2 className="text-5xl text-[#b88e2f] mt-2 font-extrabold">Discover Our <br />New Collection</h2>
        <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      </div>

      {/* Button */}
      <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[222px] h-[74px] font-semibold">
        BUY NOW
      </button>
    </div>
  </div>
</div>

{/* Responsive design for smaller and medium devices */}
<div className="relative w-full mt-4 sm:mt-6 lg:hidden">
  <div className="w-full">
    <Image
      src="/hero.jpg"
      alt="sofa"
      width={1440}
      height={716}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content Box below the image for smaller screens */}
  <div className="bg-[#fff3e3] p-8 rounded-xl w-full max-w-[643px] mx-auto mt-6">
    {/* Title and Text */}
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-gray-800">New Arrival</h3>
      <h2 className="text-3xl text-[#b88e2f] mt-2 font-extrabold">Discover Our <br />New Collection</h2>
      <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    </div>

    {/* Button */}
    <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[222px] h-[74px] font-semibold">
      BUY NOW
    </button>
  </div>
</div>







     {/* Browse Section */}
<div className="flex flex-col justify-center items-center pt-[5%]">
  <div className="flex flex-col justify-center items-center gap-3 text-center">
    <h1 className="text-4xl font-extrabold">Browse the range</h1>
    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

    {/* People Section */}
    <div className="flex flex-col lg:flex-row justify-center items-center lg:max-w-[1170px] pt-[10%] pb-[10%] gap-6 w-full mx-auto">

      {/* Dining Image and Heading */}
      <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
        <Image
          src="/dining.jpg"
          alt="dining"
          width={370}
          height={430}
          className="object-contain max-w-full"
          priority
        />
        <h3 className="text-3xl mt-4">Dining</h3>
      </div>

      {/* Living Image and Heading */}
      <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
        <Image
          src="/living.jpg"
          alt="Living"
          width={370}
          height={430}
          className="object-contain max-w-full"
          priority
        />
        <h3 className="text-3xl mt-4">Living</h3>
      </div>

      {/* Bedroom Image and Heading */}
      <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0">
        <Image
          src="/bedroom.jpg"
          alt="Bedroom"
          width={370}
          height={430}
          className="object-contain max-w-full"
          priority
        />
        <h3 className="text-3xl mt-4">Bedroom</h3>
      </div>

    </div>
  </div>
</div>



{/* Products Section */}
<div className="flex flex-col justify-center items-center min-h-screen pb-8">
  <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 p-4">
    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold">Our Products</h1>
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

      <Link href="/Individual">
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
      </Link>

      <Link href="/Individual">
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
      </Link>

      <Link href="/Individual">
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
      </Link>

      <Link href="/Individual">
      <div>
        <Image
          src="/p5.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      </Link>

      <Link href="/Individual">
      <div>
        <Image
          src="/p6.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      </Link>

      <Link href="/Individual">
      <div>
        <Image
          src="/p7.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      </Link>

      <Link href="/Individual">
      <div>
        <Image
          src="/p8.jpg"
          alt="bedroom"
          width={285}
          height={446}
          className="object-contain max-w-full"
          priority
        />
      </div>
      </Link>
    </div>
  </div>
  <button className="border border-yellow-600 w-[245px] h-[48px] rounded-md mt-6 text-yellow-600 text-lg">Show More</button>
</div>

{/* inspiration section */}
<section className="bg-[#FCF8F3] flex flex-col lg:flex-row justify-evenly items-center w-full py-10 lg:max-w-[1440px] mx-auto">
  <div className="flex flex-col items-start gap-5">
    <h1 className="text-3xl text-black mt-2 font-extrabold">50+ Beautiful rooms <br /> inspiration</h1>
    <p className="text-lg text-[#4d4b49] mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button className="mt-auto px-6 py-2 bg-[#b88e2f] text-white w-[176px] h-[48px] font-semibold">
      Explore More
    </button>
  </div>
  <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-0">
    {/* Image 1 */}
    <div className="flex-shrink-0">
      <Image
        src="/home.jpg"
        alt="bedroom"
        width={404}
        height={582}
        className="object-contain max-w-full"
        priority
      />
    </div>
    {/* Image 2 */}
    <div className="flex-shrink-0">
      <Image
        src="/home2.jpg"
        alt="bedroom"
        width={372}
        height={486}
        className="object-contain max-w-full justify-start"
        priority
      />
    </div>
  </div>
</section>


{/* images section */}
<div className="lg:max-w-[1440px]  mt-12 md:w-full hidden lg:block mx-auto">
  {/* Section Title */}
  <div className="flex flex-col justify-center items-center text-center mb-8">
    <h2 className="text-3xl font-semibold">Share your setup with</h2>
    <h3 className="text-5xl font-extrabold text-gray-800 mt-2">#FuniroFurniture</h3>
  </div>
  <div className="relative w-full">
    <Image
      src="/images.jpg"
      alt="bedroom"
      width={1440}
      height={760}
      className="object-contain max-w-full justify-start"
      priority
    />
  </div>
</div>




              
    </div>
  );
}
