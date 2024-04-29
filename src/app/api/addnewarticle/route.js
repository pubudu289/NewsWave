import connectMongoDB from "@/app/lib/mongo/mongoDB";
import Article from "@/app/modals/add_news_article";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { headline, small_description, description } = await request.json();
  // console.log(headline, small_description, description);
  await connectMongoDB();
  await Article.create({ headline, small_description, description });
  return NextResponse.json({ message: "Article Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const articles = await Article.find();
  return NextResponse.json({ articles });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Article.findByIdAndDelete(id);
  return NextResponse.json({ message: "Article Deleted..!" }, { status: 200 });
}
