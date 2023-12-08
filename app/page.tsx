import Image from "next/image";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#113946]">
      <div className="flex items-end">
        <div className="flex-1 self-end w-48 h-20 ">
          <Image
            src="/logos/logo.png"
            alt="Everies"
            width={120}
            height={120}
            className="mt-12 ml-10"
          />
        </div>

        <div className="flex-1 w-52 grid grid-cols-3 text-white text-sm text-center">
          <h2 className="self-end">Categories</h2>
          <h2 className="self-end">Profile</h2>
          <div className="pr-8">
            <span className="w-4 rounded-full bg-red-600 text-xs fixed top-12">
              4
            </span>
            <Image src="/icons/cart.png" alt="Everies" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full ">
        <div className="absolute bottom-0 w-5/12 h-4/6 bg-[#FFF2D8]"></div>
        <div className={`absolute right-0 ${styles.mainContent1}`}></div>
        <div className={`absolute left-0 top-60 bg-red-200 ${styles.mainContent2}`}></div>
        <div className={`absolute right-0 bg-lime-600 ${styles.mainContent3}`}></div>
        <div className={`absolute left-0 bg-blue-400 ${styles.mainContent4}`}></div>
      </div>
    </div>
  );
}
