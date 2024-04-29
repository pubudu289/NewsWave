"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeArticle = async () => {
    const confirmed = confirm("Do you really want to delete this article?");

    if (confirmed) {
      const res = await fetch(`/api/addnewarticle?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeArticle} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
