"use client";
import React, { useState } from "react";

const CheckoutPage = () => {
  const [isSelectAll, setSelectAll] = useState(false);
  const [isCheckout, setCheckout] = useState(false);

  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const enableDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const enableSelectAll = () => {
    setSelectAll(!isSelectAll);
  };

  const enableCheckout = () => {
    setCheckout(!isCheckout);
  };
  return (
      <div className="w-screen h-full">
        {/* NAVBAR START */}
        <div className="w-full h-28 flex text-[12px] items-end pl-5">
          <img src="/icons/arrow.png" alt="" className="w-7 h-7 flex-none" />
          <span className="ml-2 mb-1">My Shopping Bag</span>
        </div>
        {/* NAVBAR END */}
        {/* NAVBAR LEV.2 START */}
        <div className="grid grid-cols-2 px-7 w-full h-14 top-28 text-center text-xs">
          <div
            className="flex items-center justify-self-start"
            onClick={enableSelectAll}
          >
            <input
              checked={isSelectAll}
              id="checked-checkbox"
              type="checkbox"
            />
            <label className="ms-2">Select All</label>
          </div>
          <div className="self-center">
            <p>Delete</p>
          </div>
        </div>
        {/* NAVBAR LEV.2 END */}
        {/* INFO MODAL START */}
        <div className="relative w-full h-32 bg-gradient-to-b from-[#646f99] to-white pt-6 px-6 ">
          <div className="flex w-full h-full bg-white rounded-lg shadow-xl p-5 items-center">
            <img
              src="icons/icons8-delivery.gif"
              alt=""
              className="w-[30px] h-[30px] mr-3"
            />
            <p className="text-xs">
              Anda akan mendapatkan pengantaran gratis dengan minimal belanja
              Rp. 300.000 untuk pembelian apapun.
            </p>
          </div>
        </div>
        {/* INFO MODAL END */}
        {/* PRODUCTS LIST START*/}
        <div className="grid grid-cols-1 gap-1 w-full">
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample1.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Arabella Shirt - White
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample2.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Jasmine Shirt - Strip Blue White
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample4.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Zea - One Set Outfit
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample4.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Zea - One Set Outfit
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample4.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Zea - One Set Outfit
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample4.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  Zea - One Set Outfit
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
          <div className="flex h-40 p-5">
            <input
              checked={isCheckout}
              id="checked-checkbox"
              type="checkbox"
              className="flex-none mr-2 self-start"
              onClick={enableCheckout}
            />
            <div className="w-24 h-32 bg-[url('/images/sample4.jpg')] bg-cover flex-auto mr-3"></div>
            <div className="flex w-64 h-full">
              <div className="w-full flex flex-col justify-between">
                <h1 className="text-sm text-[#BCA37F] font-bold italic">
                  BATAS
                </h1>
                <div
                  className="flex text-[#113946] bg-[#F0ECE5] italic font-medium text-xs rounded-md px-2 py-2.5 items-center w-52 h-6 mb-3"
                  onClick={enableDropDown}
                >
                  <span>Category</span>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/000000/sort-down.png"
                    alt="sort-up"
                    className="ml-auto sticky"
                  />
                </div>
                <p className="text-sm">Rp. 320.000</p>
                <span className="mt-auto">
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] mr-3 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">1</span>
                  <button
                    type="button"
                    className="w-6 h-5 bg-[#F0ECE5] ml-3 text-xs"
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className="flex-auto w-5">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="flex text-center justify-center w-full h-12 bg-[#ADC4CE] p-2">
            <img
              src="https://img.icons8.com/dotty/80/000000/sale-price-tag.png"
              alt="sale-price-tag"
              className="flex-row mr-1"
            />
            <p className="text-sm font-medium self-center">
              Reedem your voucher or use loyalty points here
            </p>
          </div>
          <div className="flex justify-between w-full p-5 bg-white">
            <div>
              <h6 className="text-sm">TOTAL</h6>
              <span className="text-sm line-through text-gray-400 mr-2">
                Rp. 1.040.000
              </span>
              <span className="text-sm">Rp. 890.000</span>
              <div className="flex">
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios-filled/50/BCA37F/discount--v1.png"
                  alt="discount--v1"
                />
                <span className="text-xs italic text-[#BCA37F] ml-1">
                  You got disc 10%
                </span>
              </div>
            </div>
            <button
              type="button"
              className="bg-[#113946] text-sm font-bold text-white w-44 h-10 self-center rounded-md"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
  );
};

export default CheckoutPage;
