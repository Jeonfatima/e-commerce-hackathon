"use client";
import { useState } from "react";
import { GoSearch, GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-20 px-4 lg:px-4 xl:px-64 relative pb-[5%] z-50">
      <header className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Image
          src="/icon.jpg"
          alt="icon"
          width={185}
          height={41}
          className="object-cover"
        />

        {/* Desktop Nav (Visible on large devices) */}
        <nav className="hidden lg:flex gap-[60px] lg:h-[100px] lg:items-center whitespace-nowrap font-bold text-xl">
          <Link href="/">Home</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        {/* Search and Icons (Visible on large devices) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-2xl">
            <MdOutlinePersonOutline />
          </button>
          <button className="text-xl">
            <GoSearch />
          </button>

          {/* Wishlist Icon with Tooltip */}
          <button className="relative text-xl group">
            <Link href="/Wishlist">
              <GoHeart />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Wishlist
            </span>
          </button>

          {/* Cart Icon with Dropdown */}
          <div className="relative group">
            <button className="text-xl">
                <Link href="/Cart">
              <IoCartOutline />
              </Link>
            </button>
            <div className="absolute top-10 right-0 w-80 bg-white shadow-lg  rounded-md p-4 hidden group-hover:block z-50">
                <div>
              <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
              {/* Cart Items */}
                  <div className="flex flex-col justify-between gap-[100px]">
                    <div>
              <div className="border-b pb-2 mb-2 flex items-center">
                <img
                  src="/c1.jpg"
                  alt="Asgaard Sofa"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">Asgaard Sofa</p>
                  <p className="text-sm text-gray-500">Rs. 250,000.00</p>
                </div>
              </div>
              <div className="border-b pb-2 mb-2 flex items-center">
                <img
                  src="/c2.jpg"
                  alt="Casaliving Wood"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">Casaliving Wood</p>
                  <p className="text-sm text-gray-500">Rs. 270,000.00</p>
                </div>
              </div>
              </div>

              <div>
              {/* Subtotal */}
              <div className="text-right font-semibold mt-3 flex flex-row justify-between ">
                Subtotal: <span className=" text-yellow-600">Rs. 520,000.00</span>
              </div>
              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 text-black border border-black rounded-full hover:bg-gray-400">
                  Cart
                </button>
                <button className=" text-black px-4 py-2 border border-black rounded-full ">
                  Checkout
                </button>
                <button className= "text-black px-4 py-2 border border-black rounded-full ">
                  Comparison
                </button>

                </div>
                </div>

              </div>


              
              </div>
            </div>
          </div>
        </div>



        {/* Mobile and Medium Menu Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>

      {/* Mobile and Medium Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center gap-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/Shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/Blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg px-4 py-2 w-60"
              />
              <button className="text-xl">
                <GoSearch />
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
