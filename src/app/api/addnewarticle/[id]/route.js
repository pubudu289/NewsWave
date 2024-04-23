import connectMongoDB from "@/app/lib/mongo/mongoDB";
import Article from "@/app/modals/add_news_article";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newHeadline: headline,
    newSmall_description: small_description,
    newDescription: description,
  } = await request.json();

  await connectMongoDB();
  await Article.findByIdAndUpdate(id, {
    headline,
    small_description,
    description,
  });

  return NextResponse.json({ message: "Article Updated.!" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const article = await Article.findOne({ _id: id });
  return NextResponse.json({ article }, { status: 200 });
}
