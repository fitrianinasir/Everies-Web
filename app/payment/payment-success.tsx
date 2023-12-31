import React from "react";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="p-5 text-center text-sm">
      <div className="flex justify-center ">
        <img src="/asset/payment-success.gif" alt="" width={60} />
      </div>
      <h4 className="my-5 tracking-[0.1rem]">
        PAYMENT SUCCESS
      </h4>
      <Link href={"/my-order"}>
        <button
          type="button"
          className="w-full py-1 text-[#113946] font-medium bg-[#ADC4CE] tracking-widest"
        >
          OK
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
