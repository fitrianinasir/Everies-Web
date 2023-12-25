"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./category.module.css";
import Link from "next/link";

const CategoryPage = () => {
  const { category } = useParams();
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className={`w-full h-screen bg-white`}>
      {/* NAVBAR */}
      <div className="flex items-end">
        <div className="flex-1 md:flex-auto self-end w-48 md:w-6/12 h-20 ">
          <Image
            src="/logos/cover.png"
            alt="Everies"
            width={130}
            height={130}
            className="mt-12 ml-10 md:ml-16"
          />
        </div>
        <div className="flex-1 w-52 md:w-3 grid grid-cols-3 text-[#113946] text-sm text-center">
          <h2 className="self-end">Categories</h2>
          <h2 className="self-end">Profile</h2>
          <div className="pr-10 md:pr-20">
            <span className="w-4 rounded-full bg-red-600 text-xs top-12">
              4
            </span>
            <Image
              src="/icons/cart-dark.png"
              alt="Everies"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 h-7 mt-14 float-right bg-[#113946]"></div>
      <div className="w-full h-1/4 clear-right bg-[url('/images/women-cover.jpg')] bg-cover"></div>
      <div className="w-full h-8 bg-[#113946]"></div>
      <hr className=" h-px my-8 bg-gray-200 border-xs dark:bg-gray-500"></hr>
      <div className={`w-full flex ${styles.filters}`}>
        <div className="mr-2">
          <button
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
            className="text-[#113946] bg-[#BCA37F] font-medium text-xs rounded-full px-5 py-2.5 inline-flex items-center w-36 h-6"
            type="button"
            onClick={handleDropDown}
          >
            Category
            <svg
              className={`w-2.5 h-2.5 ms-3 ${styles.dropdownIcon}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownUsers"
            className={`z-10 fixed ${
              isDropDownOpen ? "block" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44  left-32 mt-3`}
          >
            <ul
              className="py-2 text-xs text-gray-700 h-36 overflow-y-auto"
              aria-labelledby="dropdownUsersButton"
            >
              <li>
                <a href="#" className="flex px-4 py-2">
                  Blazer
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  T-shirt
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  Pants
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  Cardigan
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  Blazer
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  T-shirt
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  Pants
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2">
                  Cardigan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full flex w-36 h-6 ps-5 "
          placeholder="Search"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-4 p-7">
        {/* center a div on another div */}
        <div className="">
          <div className="w-full h-60 bg-[url('/images/sample1.jpg')] bg-cover"></div>
          <div className="w-full h-16 pt-2">
            <h1 className="text-xs text-[#BCA37F]">Arabella Shirt - White</h1>
            <h2 className="text-sm font-bold">Rp. 225.000</h2>
            <div className="flex mt-1">
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <p className={`ml-1 ${styles.reviewText}`}>3.1k Sold</p>
            </div>
          </div>
        </div>
        <Link href={`${category}/woman-code0001`}>
        <div>
          <div className="w-full h-60 bg-[url('/images/sample2.jpg')] bg-cover"></div>
          <div className="w-full h-16 pt-2">
            <h1 className="text-xs text-[#BCA37F]">
              Jasmine Shirt - Strip Blue White{" "}
            </h1>
            <h2 className="text-sm font-bold">Rp. 225.000</h2>
            <div className="flex mt-1">
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <p className={`ml-1 ${styles.reviewText}`}>3.1k Sold</p>
            </div>
          </div>
        </div>
        </Link>
        <div>
          <div className="w-full h-60 bg-[url('/images/sample3.jpg')] bg-cover"></div>
          <div className="w-full h-16 pt-2">
            <h1 className="text-xs text-[#BCA37F]">Diana Shirt - Orange</h1>
            <h2 className="text-sm font-bold">Rp. 225.000</h2>
            <div className="flex mt-1">
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <p className={`ml-1 ${styles.reviewText}`}>3.1k Sold</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-60 bg-[url('/images/sample4.jpg')] bg-cover"></div>
          <div className="w-full h-16 pt-2">
            <h1 className="text-xs text-[#BCA37F]">Zea - One Set Outfit</h1>
            <h2 className="text-sm font-bold">Rp. 225.000</h2>
            <div className="flex mt-1">
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <img
                width="10"
                src="https://img.icons8.com/ios-filled/50/F1B4BB/star--v1.png"
                alt="star--v1"
                className="ml-0.5"
              />
              <p className={`ml-1 ${styles.reviewText}`}>3.1k Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
