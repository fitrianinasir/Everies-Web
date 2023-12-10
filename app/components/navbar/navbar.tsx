"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-end">
      <div className="flex-1 md:flex-auto self-end w-48 md:w-6/12 h-20 ">
        <Image
          src="/logos/logo.png"
          alt="Everies"
          width={120}
          height={120}
          className="mt-12 ml-10 md:ml-16"
        />
      </div>
      <div className="flex-1 w-52 md:w-3 grid grid-cols-3 text-white text-sm text-center">
        <h2 className="self-end">Categories</h2>
        <h2 className="self-end">Profile</h2>
        <div className="pr-10 md:pr-20">
          <span className="w-4 rounded-full bg-red-600 text-xs fixed top-12">
            4
          </span>
          <Image src="/icons/cart.png" alt="Everies" width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
