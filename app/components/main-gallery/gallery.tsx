"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./gallery.module.css";

const MainGallery = () => {
  return (
    <div className="">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className={styles.gallery}>
          <h1
            className={`w-full fixed font-extrabold italic text-4xl text-[#a0b5bc] text-center ${styles.imageTitle1}`}
          >
            WOMEN'S
          </h1>
          <div
            className={`flex w-7/12 h-3/6 bg-[url('/images/women.jpg')] ${styles.images}`}
          ></div>
          <h1
            className={`w-full fixed font-extrabold italic text-5xl text-[#113946] text-center tracking-[.5em] ${styles.imageTitle2} `}
          >
            WEAR
          </h1>
        </div>
        <div className={styles.gallery}>
          <h1
            className={`w-full fixed font-extrabold italic text-4xl text-[#a0b5bc] text-center ${styles.imageTitle1} `}
          >
            MEN'S
          </h1>
          <div
            className={`flex w-7/12 h-3/6 bg-[url('/images/men.jpg')]  ${styles.images}`}
          ></div>
          <h1
            className={`w-full fixed font-extrabold italic text-5xl text-[#113946] text-center tracking-[.5em] ${styles.imageTitle2} `}
          >
            WEAR
          </h1>
        </div>
        <div className={styles.gallery}>
          <h1
            className={`w-full fixed font-extrabold italic text-4xl text-[#a0b5bc] text-center ${styles.imageTitle1} `}
          >
            KID'S
          </h1>
          <div className={`flex w-7/12 h-3/6 bg-[url('/images/kids.jpg')]  ${styles.images}`}></div>
          <h1
            className={`w-full fixed font-extrabold italic text-5xl text-[#113946] text-center tracking-[.5em] ${styles.imageTitle2} `}
          >
            WEAR
          </h1>
        </div>
        <div className={styles.gallery}>
          <h1
            className={`w-full fixed font-extrabold italic text-4xl text-[#a0b5bc] text-center ${styles.imageTitle1} `}
          >
            MEN'S
          </h1>
          <div className={`flex w-7/12 h-3/6 bg-[url('/images/men_shoes.jpg')] ${styles.images}`}></div>
          <h1
            className={`w-full fixed font-extrabold italic text-4xl text-[#113946] text-center tracking-[.5em] ${styles.imageTitle2} `}
          >
            SHOES
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default MainGallery;
