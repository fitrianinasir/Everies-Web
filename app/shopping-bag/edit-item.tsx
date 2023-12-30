import React from "react";

const EditItem = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-28 h-24 bg-[url('/images/sample1.jpg')] bg-cover mr-3"></div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-sm text-[#BCA37F] font-bold italic">
            Arabella Shirt - White
          </h1>
          <p className="text-sm">Rp. 320.000</p>
          <p className="text-[10px] text-gray-500">STOCK LEFT: 500</p>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0" />
      <p className="text-sm">Category</p>
      <div className="my-3 grid grid-cols-4 gap-2">
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">
          Stripped White
        </div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">
          Stripped Red
        </div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">
          Stripped Black
        </div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">
          Stripped Blue
        </div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">
          Stripped Brown
        </div>
      </div>
      <p className="text-sm">Size</p>
      <div className="my-3 grid grid-cols-4 gap-2">
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">S</div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">M</div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">L</div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">XL</div>
        <div className="px-2 py-1 bg-gray-200 text-[10px] text-center">2XL</div>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-sm">Count</p>
        <span className="mt-auto">
          <button type="button" className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs">
            -
          </button>
          <span className="font-bold text-sm">1</span>
          <button type="button" className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs">
            +
          </button>
        </span>
      </div>
      <button
        type="button"
        className="w-full h-3 bg-[#113946] p-5 text-white text-sm rounded-md font-medium leading-[0px] tracking-widest mt-8"
      >
        CONFIRM
      </button>
    </div>
  );
};

export default EditItem;
