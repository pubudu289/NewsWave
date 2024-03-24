import React from "react";
import styles from "./signup.module.css";
import Link from "next/link";
function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.deranalogo}>{/* add a derana logo */}</div>
      <div className={styles.headbar}></div>
      <div>
        <h1 className={styles.maintextArea}>
          <span className={styles.admin}>Admin</span> Registration
        </h1>
        <div className={styles.signup_input_area}>
          <p className={styles.login_desc}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
          <input
            type="text"
            placeholder="First Name"
            className={styles.inputFields}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.inputFields}
          />
          <input
            type="number"
            placeholder="Mobile Numebr"
            className={styles.inputFields}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputFields}
          />
          <input
            type="password"
            placeholder="New Password"
            className={styles.inputFields}
          />
          <input
            type="password"
            placeholder="confirm pasword"
            className={styles.inputFields}
          />
          <input type="checkbox" className={styles.inputFields} />{" "}
          <label className={styles.showpass}> Show password</label>
          <button className={styles.login_button}>Sign up</button>
          <div>
            <p className={styles.txtsignup}>
              You have an account?{" "}
              <span className={styles.signup_now}>
                {" "}
                <Link href="./signin">Sign In Now</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
