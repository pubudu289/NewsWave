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
      </Layout>
    </div>
  );
}
export default page;
