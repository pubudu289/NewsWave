import React from "react";
import Layout from "../Components/Layout";

const getArticleCount = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addnewarticle", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to load data..");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading data : ", error);
  }
};

export default async function Dashboard() {
  const { articleCount } = await getArticleCount();

  return (
    <>
      <div>
        <Layout>
          <div className="bg-gray-600 rounded-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <p className="text-white font-bold">Admin Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Report area */}
          <div className=" border-[1px] rounded-md mt-3 shadow-sm ">
            <div className="sm:flex sm:flex-row p-4 sm:gap-6">
              <div className="border-[1px] rounded-md grow">
                <div className="font-bold align-middle text-center px-24 py-3 text-[20px]">
                  Articals
                </div>
                <div className="text-center py-16 font-bold text-3xl border-t-2">
                  200
                </div>
              </div>

              {/* card start */}

              {/* card start */}
              <div className="border-[1px] rounded-md mt-2 text-center grow">
                <div className="font-bold align-middle place-self-auto px-24 py-3 text-[20px]">
                  Writters
                </div>
                <div className="text-center py-16 font-bold text-3xl border-t-2">
                  200
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
