import React from "react";
import Image from "next/image";
import dlogo from "../../../public/images/derana1.png";
import styles from "../page.module.css";

function header() {
  return (
    <>
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  {" "}
                  <Image
                    src={dlogo}
                    alt="logo"
                    height={50}
                    width={50}
                    className="bg-white"
                  />{" "}
                  <p className={styles.logotxt}>News Wave</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
