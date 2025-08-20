import Image from "next/image";
import { notFound } from "next/navigation";
import blogsData from "../../../blogsData/blogsData";

// Optional but safe with output: "export"
export const dynamicParams = false;

// Required by output: "export"
export function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto mt-20 py-10 px-4 space-y-8">
      <article id="blog-detail">
        <h1 className="text-4xl font-bold  mb-4">{blog.title}</h1>
        <Image
          alt={blog.title}
          width={800}
          height={450}
          className="w-full rounded mb-4"
          src={blog.image}
        />
        <p className="mb-4 whitespace-pre-line">{blog.content}</p>
      </article>
    </div>
  );
}