import Image from "next/image";
import newsimg from "../../../../public/images/bnews.jpg";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "@/app/Admin/Components/RemoveBtn";

const getArticles = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addnewarticle", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading articles: ", error);
  }
};

export default async function ArticalList() {
  const { articles } = await getArticles();

  return (
    <>
      {articles.map((a) => (
        <div
          key={a._id}
          className="sm:border border-slate-300 p-2 sm:rounded-lg sm:flex sm:justify-start sm:gap-4 sm:items-start mt-1 scroll"
        >
          <div>
            <Image
              src={newsimg}
              height={100}
              width={150}
              priority="true"
              alt="img"
              className="border-2 rounded-[10px] h-[120px]"
            />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">{a.headline}</h1>
            <p className="font-bold">{a.small_description}</p>
            <p>{a.description}</p>
          </div>
          <div className="ml-auto flex gap-2">
            <RemoveBtn id={a._id} />
            <Link href={`/Admin/update_article/${a._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
