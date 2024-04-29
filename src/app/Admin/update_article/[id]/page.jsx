"use client";
import React, { useState } from "react";
import Layout from "../../Components/Layout";
import UpdateArticle from "@/app/Admin/Components/UpdateArticle";

const page = () => {
  // const [headlinetxt, setHeadlinetxt] = useState("");
  // const [smalldestxt, setSmalldestxt] = useState("");
  // const [articletxt, setArticletxt] = useState("");
  // const [error, setError] = useState([]);

  return (
    <Layout>
      <div className="bg-gray-600 rounded-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <p className="text-white font-bold">Update Artical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form area */}
      <div>abs</div>
      <UpdateArticle />
    </Layout>
  );
};

export default page;
