"use client";
import React from "react";

const LoginBtn = () => {
  return (
    <button
      type="button"
      className='relative top-24 w-full text-white text-sm pt-2 pb-2 rounded-full text bg-[#113946]'
      onClick={() => console.log("Click")}
    >
      SIGN IN
    </button>
  );
};

export default LoginBtn;
