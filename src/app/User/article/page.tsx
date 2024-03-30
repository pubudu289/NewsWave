import React from "react";
import Header from "../../Components/header";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import LatestNews from "../../Components/latestnews";
import Image from "next/image";
import newsimg from ".././../../../public/images/bnews.jpg";
function article_page() {
  return (
    <>
      <section>
        <Header />
        <hr />
        <Navbar />
      </section>
      <section>
        {/* All article section */}
        <section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 p-4 gap-3">
            <div className="md:col-span-9">
              <div className="bg-cover">
                <div className="bg-black"></div>
                <h1 className="font-bold  text-white absolute p-3  ml-4 text-[15px]">
                  #Article Head Line Design dcdsvf vfaff
                </h1>
                <Image
                  src={newsimg}
                  height={100}
                  width={1000}
                  alt="img"
                  className="border-2 rounded-[10px] h-[250px]"
                />
              </div>
              {/* details section */}
              <div className="border-1 shadow mt-2 p-2 grid grid-cols-3 gap-4 divide-x">
                <div className="p-1 ">
                  <p className="text-[10px] ml-2">Publish By : 2024/12/12</p>
                </div>
                <div className="p-1 col-span-2">
                  <p className="text-[10px] ml-2 ">Author : Alexander Crouso</p>
                </div>
              </div>
              {/* artical desscription */}
              <div className="texr-[12px] mt-3 p-2">
                <p>hvdvv vadsvd vdsvadvd </p>
              </div>
            </div>
            <div className=" rounded-[10px] sm:col-span-3">
              <div className="border-2 rounded-[10px]">
                <div className="bg-red-700 rounded-t-[10px]  p-2">
                  <p className="text-white font-bold text-center">Lates News</p>
                </div>
                <div className="m-3 snap-y h-[500px] overflow-scroll no-scrollbar">
                  <LatestNews />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <hr />
      <Footer />
    </>
  );
}

export default article_page;
