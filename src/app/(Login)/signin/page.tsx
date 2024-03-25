import React from "react";
import styless from "./signin.module.css";
import Link from "next/link";
import Image from "next/image";
import dlogo from "../../../../public/images/derana1.png";

function page() {
  return (
    <>
      <div className={styless.container}>
        <div className={styless.deranalogo}>
          <Image src={dlogo} alt="logo" className={styless.dlogos} />
        </div>
        <div className={styless.headbar}></div>
        <div>
          <h1 className={styless.maintextArea}>
            <span className={styless.admin}>Admin</span> Login
          </h1>

          <div className={styless.login_input_area}>
            <p className={styless.login_desc}>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>

            <input
              type="text"
              placeholder="User Name"
              className={styless.inputFields}
            />
            <input
              type="password"
              placeholder="password"
              className={styless.inputFields}
            />
            <button className={styless.login_button}>Login</button>
            <div>
              <p className={styless.txtsignup}>
                Don't have an account?{" "}
                <span className={styless.signup_now}>
                  <Link href="./signup">Sign Up Now</Link>
                </span>
              </p>
            </div>
            <hr />
            {/* social media links */}
            <div>
              <p className={styless.txtsignup}>Connect with social media</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
