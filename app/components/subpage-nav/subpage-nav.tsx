"use client"
import Link from "next/link";
import React from "react";

const SubPageNav = ({title, prev}: any) => {
  return (
    <Link href={prev}>
    <div className="w-full h-28 flex text-[12px] items-end">
      <img src="/icons/arrow.png" alt="" className="w-7 h-7 flex-none" />
      <span className="ml-2 mb-1">{title}</span>
    </div>
    </Link>
  );
};

export default SubPageNav;
