import { connectDbPromise } from "@/app/lib/mongo/mongoDB";
import { articalModal } from "@/app/modals/add_news_article";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  await connectDbPromise;
  const newArtical = await articalModal().create({
    headline: body.headline,
    small_description: body.small_description,
    description: body.description,
  });

  return new Response(JSON.stringify(newArtical), { status: 201 });
};
