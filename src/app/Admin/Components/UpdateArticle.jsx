import React from "react";

export default function UpdateArticle() {
  return (
    <div className="m-10 bg-white border-[1px] border-gray-400 shadow-md rounded-md mt-3 p-3 py-3">
      <div>
        <h1 className="text-3xl font-bold">Update Article</h1>
        <p>Please fill in the form bellow</p>
      </div>
      <form className="py-4  flex flex-col gap-4 border-t">
        <div>
          <label htmlFor="Headline">Article Headline</label>
          <input
            // onChange={(e) => setHeadlinetxt(e.target.value)}
            // value={headlinetxt}
            type="text"
            id="headlinetxt"
            placeholder="Headline"
          />
        </div>
        <div>
          <label htmlFor="smalldesc">Small Description</label>
          <textarea
            // onChange={(e) => setSmalldestxt(e.target.value)}
            // value={smalldestxt}
            className="h-14"
            id="smalldestxt"
            placeholder="Small Description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="article">Article</label>
          <textarea
            // onChange={(e) => setArticletxt(e.target.value)}
            // value={articletxt}
            className="h-52"
            id="articletxt"
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
  );
}
