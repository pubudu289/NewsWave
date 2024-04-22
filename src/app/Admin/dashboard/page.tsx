import React from "react";
import Layout from "../Components/Layout";

function page() {
  return (
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
            {/* card start */}
            <div className="border-[1px] rounded-md grow">
              <div className="font-bold align-middle text-center px-24 py-3 text-[20px]">
                Articals
              </div>
              <div className="text-center py-16 font-bold text-3xl border-t-2">
                200
              </div>
            </div>
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
  );
}
export default page;
