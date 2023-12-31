"use client";
import React, { useEffect, useState } from "react";
import SubPageNav from "../components/subpage-nav/subpage-nav";
import DeleteAlert from "./delete-alert";
import EditItem from "./edit-item";
import Link from "next/link";

const ShoppingBagPage = () => {
  const [isSelectAll, setSelectAll] = useState(false);
  const [isCheckout, setCheckout] = useState(false);

  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const [isDeleteOK, setDeleteOK] = useState(false);
  const [count, setCount] = useState(2);

  useEffect(() => {
    if (isDeleteOK) {
      const toastDisappear = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      if (count === 0) {
        clearInterval(toastDisappear);
        setDeleteOK(false);
      }
      return () => clearInterval(toastDisappear);
    }
  }, [isDeleteOK, count]);

  const enableDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const enableSelectAll = () => {
    setSelectAll(!isSelectAll);
  };

  const enableCheckout = () => {
    setCheckout(!isCheckout);
  };

  const openDelete = () => {
    setDeleteOpen(!isDeleteOpen);
  };

  const handleDeleteOK = (val: boolean) => {
    if (val) {
      setCount(2);
      setDeleteOK(val);
    }
    setDeleteOpen(false);
  };

  return (
    <div>
      <div
        className={`fixed w-screen h-full ${
          isDropDownOpen ? "opacity-70 bg-black" : "hidden"
        }`}
        onClick={enableDropDown}
      ></div>
      <div
        className={`fixed w-screen h-full ${
          isDeleteOpen ? "opacity-70 bg-black" : "hidden"
        }`}
        onClick={openDelete}
      ></div>
      <div className="w-screen h-full">
        <div className="px-7">
          <SubPageNav title={"My Shopping Bag"} prev={"/"} />
        </div>
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
        <div className="w-full h-32 bg-gradient-to-b from-[#646f99] to-white pt-6 px-6 ">
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
        <div className="w-full grid grid-cols-1 gap-1 mt-2">
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
            <div className="flex-auto w-5" onClick={openDelete}>
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
            <div className="flex-auto w-5" onClick={openDelete}>
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
            <div className="flex-auto w-5" onClick={openDelete}>
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/pastel-glyph/64/trash.png"
                alt="trash"
              />
            </div>
          </div>
        </div>
        {/* PRODUCTS LIST END*/}
        {/* FOOTER START */}
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
            <Link href={'/checkout'}>
            <button
              type="button"
              className="bg-[#113946] text-sm font-bold text-white w-44 h-10 self-center rounded-md"
            >
              CHECKOUT
            </button>
            </Link>
          </div>
        </div>
        {/* FOOTER END */}
      </div>

      {isDropDownOpen ? (
        <div className="fixed w-screen h-3/6 bottom-0 p-5 transition-[height] ease-in duration-300 bg-white">
          <EditItem />
        </div>
      ) : (
        ""
      )}

      {isDeleteOpen ? (
        <div className="absolute w-[80%] top-[35%] left-[10%]">
          <DeleteAlert onDeleteOK={handleDeleteOK} />
        </div>
      ) : (
        ""
      )}

      {isDeleteOK ? (
        <div
          className={`absolute top-[8%] right-[5%] ${
            count === 1
              ? "transition-opacity duration-1000 ease-in opacity-0"
              : ""
          }`}
        >
          <div
            id="toast-success"
            className="flex items-center px-3 py-2 mb-4 text-black bg-[#F0ECE5] rounded-lg shadow"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-lg bg-amber-950 text-[#F0ECE5]">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-2 text-xs font-normal">
              Item deleted successfully
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShoppingBagPage;
