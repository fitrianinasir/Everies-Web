"use client";
import React, { useEffect, useState } from "react";
import SubPageNav from "../components/subpage-nav/subpage-nav";
import PaymentExpired from "./payment-expired";
import PaymentSuccess from "./payment-success";

const PaymentPage = () => {
  const [hour, setHour] = useState<number>(1);
  const [minute, setMinute] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(5);
  const [isExpired, setExpired] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const countDown = setInterval(() => {
      setSeconds(seconds - 1);
      if (hour > 0) {
        setHour(hour - 1);
        setMinute(minute - 1);
      }

      if (seconds == 0 && minute > 0) {
        setSeconds(59);
        setMinute(minute - 1);
      }
    }, 1000);
    if (minute == 0 && seconds == 0) {
      setExpired(true);
      clearInterval(countDown);
    }
    return () => clearInterval(countDown);
  }, [hour, minute, seconds]);

  const paymentSuccessFunc = () => setSuccess(true);

  return (
    <div className="main-container">
      <div
        className={`fixed w-screen h-full 
        ${isExpired ? "opacity-50 bg-black" : "hidden"}  
        `}
      ></div>
      <div
        className={`fixed w-screen h-full 
        ${isSuccess ? "opacity-50 bg-black" : "hidden"}
        `}
      ></div>
      <div className="w-screen h-screen flex flex-col justify-between ">
        <div>
          <div className="px-7">
            <SubPageNav title={"CANCEL"} prev={"/"} />
          </div>
          <div className="w-full flex justify-center mt-16 ">
            <img
              src="/asset/output-onlinegiftools.gif"
              alt="waiting payment"
              width={250}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full h-4/5 pt-14 px-10 rounded-t-[20%] border-t-[2px] border-dashed border-[#BCA37F] ">
          <div>
            <div className="flex justify-center">
              <img width={100} src="/asset/bca.png" alt="" />
            </div>
            <div className="flex justify-between text-sm font-medium my-10">
              <h6 className="">BCA Virtual Account:</h6>
              <div className="flex">
                <h6 className="italic mr-2">2259874561234568</h6>
                <div className="text-[AC8989] border-dashed border-[1px] px-2 text-xs border-[#AC8989]">
                  COPY
                </div>
              </div>
            </div>
            <div className="bg-[#fae7d1] border-[2px] border-dotted border-[#776B5D] px-5 py-3 text-[12px] rounded-lg tracking-wider">
              <div className="flex justify-between mb-2">
                <p>ORDER ID</p>
                <p className="italic font-medium">65897542</p>
              </div>
              <div className="flex justify-between">
                <p>TOTAL</p>
                <p className="italic font-medium">Rp. 890.000</p>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-2 font-medium my-10 text-center text-[#B0A695] text-xs tracking-[0.3rem] border-[1px] border-[#B0A695]"
            >
              CHANGE PAYMENT METHOD
            </button>
          </div>
          <div>
            <p className=" text-center text-[10px] font-medium mb-2">
              Your payment will be expired in
              <span className="ml-1 italic text-[#776B5D]">
                0{hour}:
                {minute == 60
                  ? "00"
                  : minute.toString().length == 1
                  ? "0" + minute
                  : minute}
                :
                {seconds == 60
                  ? "00"
                  : seconds.toString().length == 1
                  ? "0" + seconds
                  : seconds}
              </span>
            </p>
            <button
              type="button"
              onClick={paymentSuccessFunc}
              className="w-full text-center text-sm bg-[#B0A695] py-4 text-white rounded-t-3xl tracking-[0.2rem] font-extralight"
            >
              CHECK ORDER STATUS
            </button>
          </div>
        </div>
      </div>

      {isExpired ? (
        <div className="absolute w-[80%] top-[35%] left-[10%] bg-white">
          <PaymentExpired />
        </div>
      ) : (
        ""
      )}

      {isSuccess ? (
        <div className="absolute w-[80%] top-[35%] left-[10%] bg-white">
          <PaymentSuccess />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaymentPage;
