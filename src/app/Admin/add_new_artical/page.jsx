"use client";
import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useRouter } from "next/navigation";

const page = () => {
  const [headline, setHeadline] = useState("");
  const [small_description, setSmall_description] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!headline || !small_description || !description) {
      alert("All inputs are required!");
      return;
    }

    try {
      const res = await fetch("/api/addnewarticle", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ headline, small_description, description }),
      });
      if (res.ok) {
        router.push("/Admin/all_articals");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-600 rounded-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <p className="text-white font-bold">Add New Artical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form area */}
      <div className="m-10 bg-white border-[1px] border-gray-400 shadow-md rounded-md mt-3 p-3 py-3">
        <div>
          <h1 className="text-3xl font-bold">Add New Article</h1>
          <p>Please fill in the form bellow</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="py-4  flex flex-col gap-4 border-t"
        >
          <div>
            <label htmlFor="Headline">Article Headline</label>
            <input
              onChange={(e) => setHeadline(e.target.value)}
              value={headline}
              type="text"
              id="headline"
              placeholder="Headline"
            />
          </div>
          <div>
            <label htmlFor="smalldesc">Small Description</label>
            <textarea
              onChange={(e) => setSmall_description(e.target.value)}
              value={small_description}
              className="h-14"
              id="small_description"
              placeholder="Small Description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="article">Article</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-52"
              id="description"
              placeholder="Type your Article Here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 p-3 text-white font-bold rounded-md w-fit"
          >
            {" "}
            Submit
          </button>
        </form>
        <div className="bg-slate-100 flax flex-col">
          <div className="text-red-600 px-5 py-2">Error message</div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
