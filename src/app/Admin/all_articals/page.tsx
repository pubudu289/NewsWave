import React from "react";
import Layout from "../Components/Layout";
import ArticleList from "@/app/Admin/Components/ArticlesList";

const page = () => {
  return (
    <Layout>
      <div className="bg-gray-600 rounded-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <p className="text-white font-bold">All Articals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Area */}
      <div className="mt-2">
        <ArticleList />
      </div>
    </Layout>
  );
};

export default page;
