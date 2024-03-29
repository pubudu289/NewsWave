import React from "react";
import Header from "../../Components/header";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
function article_page() {
  return (
    <>
      <section>
        <Header />
        <hr />
        <Navbar />
      </section>
      <section>
        <div>article section</div>
      </section>
      <hr />
      <Footer />
    </>
  );
}

export default article_page;
