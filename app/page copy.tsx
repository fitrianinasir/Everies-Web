import Image from "next/image";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={`w-full h-screen bg-[#113946] ${styles.mainContainer}`}>
      {/* NAVBAR */}
      <div className="flex items-end">
        <div className="flex-1 md:flex-auto self-end w-48 md:w-6/12 h-20 ">
          <Image
            src="/logos/logo.png"
            alt="Everies"
            width={120}
            height={120}
            className="mt-12 ml-10 md:ml-16"
          />
        </div>
        <div className="flex-1 w-52 md:w-3 grid grid-cols-3 text-white text-sm text-center">
          <h2 className="self-end">Categories</h2>
          <h2 className="self-end">Profile</h2>
          <div className="pr-10 md:pr-20">
            <span className="w-4 rounded-full bg-red-600 text-xs fixed top-12">
              4
            </span>
            <Image src="/icons/cart.png" alt="Everies" width={25} height={25} />
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex text-white text-lg font-bold italic items-center justify-center w-full md">
        <div className="absolute bottom-0 w-5/12 h-4/6 bg-[#FFF2D8] md:hidden"></div>
        <div className={`absolute right-0 ${styles.mainContent1}`}>
          <h1 className="flex h-full items-center justify-center">
            WOMAN'S WEAR
          </h1>
        </div>
        <div className={`absolute left-0 top-60 ${styles.mainContent2}`}>
          <h1 className="flex h-full items-center justify-center">
            MAN'S WEAR
          </h1>
        </div>
        <div className={`absolute right-0 ${styles.mainContent3}`}>
          <h1 className="flex h-full items-center justify-center">
            KID'S WEAR
          </h1>
        </div>
        <div className={`absolute left-0 ${styles.mainContent4}`}>
          <h1 className="flex h-full items-center justify-center">
            MAN'S SHOES
          </h1>
        </div>
      </div>
    </div>
  );
}
