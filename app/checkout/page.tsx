import React from "react";
import SubPageNav from "../components/subpage-nav/subpage-nav";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between px-7 ">
      <div>
        <SubPageNav title={"Checkout"} prev={"/"} />
        <div className="grid grid-cols-2 w-full h-14 top-28 text-center text-xs text-[#113946]">
          <div className="flex items-center justify-self-start ">
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios/50/113946/marker--v1.png"
              alt="marker--v1"
            />
            <p className="ml-1">Address Delivery</p>
          </div>
          <div className="self-center">
            <p>Change</p>
          </div>
        </div>
        <div className="w-full  shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] px-3 py-4">
          <p className="w-max px-2 py-1 bg-[#67729D] text-[10px] text-white italic font-medium rounded-3xl">
            Fitriani Nasir (082347052535)
          </p>
          <p className="text-[11px] mt-2">
            Kost Putri Ibu Retno, Tanah Abang, Kota Jakarta Pusat, DKI Jakarta
            10240
          </p>
        </div>
        <h1 className="my-5 text-sm text-bold text-[#113946] tracking-widest">
          ORDER SUMMARY
        </h1>
        {/* PRODUCT LIST START */}
        <div className="w-full grid grid-cols-1 gap-5 mt-2">
          <div className="w-full">
            <div className="flex">
              <div className="w-16 h-24 bg-[url('/images/sample1.jpg')] bg-cover flex-auto mr-3"></div>
              <div className="flex w-64 h-24">
                <div className="w-full flex flex-col justify-between">
                  <h1 className="text-sm text-[#BCA37F] font-bold italic">
                    Arabella Shirt - White
                  </h1>
                  <h2 className="flex text-[#113946] italic font-medium text-xs my-2">
                    Size: L - Varian: White
                  </h2>
                  <p className="text-xs mt-auto">Rp. 320.000</p>
                </div>
              </div>
              <div className="flex-auto w-5">
                <span className="text-xs">x1</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="w-16 h-24 bg-[url('/images/sample1.jpg')] bg-cover flex-auto mr-3"></div>
              <div className="flex w-64 h-24">
                <div className="w-full flex flex-col justify-between">
                  <h1 className="text-sm text-[#BCA37F] font-bold italic">
                    Arabella Shirt - White
                  </h1>
                  <h2 className="flex text-[#113946] italic font-medium text-xs my-2">
                    Size: L - Varian: White
                  </h2>
                  <p className="text-xs mt-auto">Rp. 320.000</p>
                </div>
              </div>
              <div className="flex-auto w-5">
                <span className="text-xs">x1</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="w-16 h-24 bg-[url('/images/sample1.jpg')] bg-cover flex-auto mr-3"></div>
              <div className="flex w-64 h-24">
                <div className="w-full flex flex-col justify-between">
                  <h1 className="text-sm text-[#BCA37F] font-bold italic">
                    Arabella Shirt - White
                  </h1>
                  <h2 className="flex text-[#113946] italic font-medium text-xs my-2">
                    Size: L - Varian: White
                  </h2>
                  <p className="text-xs mt-auto">Rp. 320.000</p>
                </div>
              </div>
              <div className="flex-auto w-5">
                <span className="text-xs">x1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT LIST END */}
      <div className="">
        <div
          className="w-full flex justify-between my-8 px-3 py-2 text-sm border-[1px] 
      border-[#BCA37F] rounded-lg text-center shadow-[0_15px_5px_0px_rgba(213,197,174,0.4)]"
        >
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/ios-filled/50/BCA37F/discount--v1.png"
            alt="discount--v1"
          />
          <p className="">Reedem your voucher or use loyalty points here</p>
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/ios-filled/50/BCA37F/circled-right.png"
            alt="circled-right"
          />
        </div>
        <div className="w-screen -ml-7 mt-5 grid grid-cols-2 border-[0.1px] border-[#BCA37F] px-5 py-4 text-xs">
          <div className="flex">
            <h5 className="mr-1">PAYMENT METHOD</h5>
            <img
              width="10"
              src="https://img.icons8.com/material-rounded/24/edit--v1.png"
              alt="edit--v1"
            />
          </div>
          <div className="flex justify-end">
            <h5 className="font-bold mr-2">BCA Virtual Account</h5>
            <img width={50} src="/asset/bca.png" alt="" />
          </div>
        </div>
        <div className="w-full mt-5 text-[12px]">
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between">
              <h6>Subtotal</h6>
              <p>Rp. 1.040.000</p>
            </div>
            <div className="flex justify-between">
              <h6>Discount</h6>
              <p>- Rp. 80.000</p>
            </div>
            <div className="flex justify-between">
              <h6>Shipping Fee</h6>
              <p>Rp. 0,-</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between font-semibold text-white bg-[#BCA37F] px-5 py-3 mt-5 rounded-3xl">
          <p className="tracking-[0.5rem]">TOTAL</p>
          <p className="italic tracking-[0.1rem]">Rp. 890.000</p>
        </div>
        <Link href={"/payment"}>
          <button
            type="button"
            className="float-right text-white my-5 px-5 py-2 font-medium bg-[#113946] tracking-[0.1rem] rounded-md text-sm"
          >
            PLACE ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
