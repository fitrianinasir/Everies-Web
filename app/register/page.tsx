import React from "react";
import styles from '../style.module.css';
import Image from "next/image";
import RegisterBtn from "../components/auth/register-btn";

const RegisterPage = () => {
  return (
    <>
      <div className="h-full bg-[#FFF2D8]">
        <div className="flex items-center justify-center">
          <div className="absolute w-full md:w-2/12 max-sm:w-3/5 max-sm:-top-6 md:-top-12">
            <Image
              src="/logos/default.png"
              alt="Everies"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center">
          <div className={`h-screen bg-white p-10 md:w-/12 max-sm:mt-56 md:mt-32 ${styles.authContainer}`}>
            <div className="relative max-sm:top-6 md:top-4">
              <h1 className="font-bold text-7xl">Hi!</h1>
              <h2 className="relative top-2 font-semibold text-base">
                We're glad to have you here!
              </h2>
              <div className="form">
              <div className="mt-16 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-500 md:placeholder:text-xs bg-[#FFF2D8]`}
                    placeholder="Fullname"
                  />
                </div>
                <div className="mt-5 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-500 md:placeholder:text-xs bg-[#FFF2D8]`}
                    placeholder="Email"
                  />
                </div>
                <div className="mt-5 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-500 md:placeholder:text-xs bg-[#FFF2D8]`}
                    placeholder="Password"
                  />
                </div>
                <div className="mt-5 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-500 md:placeholder:text-xs bg-[#FFF2D8]`}
                    placeholder="Confirm Password"
                  />
                </div>
                <span className="relative top-5 text-sm float-right font-semibold italic text-blue-500">
                  Forget your password?
                </span>
              </div>
              <RegisterBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
