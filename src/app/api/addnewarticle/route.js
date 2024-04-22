import connectMongoDB from "@/app/lib/mongo/mongoDB";
import Article from "@/app/modals/add_news_article";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { headline, small_description, description } = await request.json();
  await connectMongoDB();
  await Article.create({ headline, small_description, description });
  return NextResponse.json({ message: "Article Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const articles = await Article.find();
  return NextResponse.json({ articles });
}
