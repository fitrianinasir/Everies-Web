import Link from "next/link";
import React from "react";

const PaymentExpired = () => {
  return (
    <div className="p-5 text-center text-sm">
      <div className="flex justify-center ">
        <img src="/asset/payment-cancel.gif" alt="" width={60} />
      </div>
      <h4 className="my-5">Your payment time is expired, items are automatically canceled.</h4>
      <Link href={"/shopping-bag"}>
        <button type="button" className="w-full py-1 text-[#113946] font-medium bg-[#ADC4CE] tracking-widest">
          OK
        </button>
      </Link>
    </div>
  );
};

export default PaymentExpired;
