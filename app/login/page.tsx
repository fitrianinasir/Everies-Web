import React from "react";
import styles from '../style.module.css';
import Image from "next/image";
import LoginBtn from "../components/auth/login-btn";

const LoginPage = () => {
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
            <div className="relative max-sm:top-12 md:top-10">
              <h1 className="font-bold text-2xl">
                WELCOME BACK!
              </h1>
              <div className="form">
                <div className="mt-16 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-900 placeholder:text-sm bg-[#FFF2D8]`}
                    placeholder="Email"
                  />
                </div>
                <div className="mt-10 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 font-semibold italic placeholder:text-gray-900 placeholder:text-sm bg-[#FFF2D8]`}
                    placeholder="Password"
                  />
                </div>
                <span className="relative top-5 text-sm float-right font-semibold italic text-blue-500">
                  Forget your password?
                </span>
              </div>
              <LoginBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
