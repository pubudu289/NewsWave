"use client";
import React, { useState } from "react";
import Layout from "../../Components/Layout";
import UpdateArticle from "@/app/Admin/Components/UpdateArticle";

const getArticleById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/addnewarticle/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new error("Failed to fetch Article..");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function page({ params }) {
  const { id } = params;
  const { article } = await getArticleById(id);
  const { headline, small_description, description } = article;

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
      <UpdateArticle
        id={id}
        headline={headline}
        small_description={small_description}
        description={description}
      />
    </Layout>
  );
}
