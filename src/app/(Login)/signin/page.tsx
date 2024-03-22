import React from "react";
import styless from "./signin.module.css";
function page() {
  return (
    <div className={styless.container}>
      <div className={styless.headbar}></div>
      <div>
        <h1 className={styless.maintextArea}>
          <span className={styless.admin}>Admin</span> Login
        </h1>

        <div className={styless.deranalogo}></div>
      </div>
    </div>
  );
}

export default page;
