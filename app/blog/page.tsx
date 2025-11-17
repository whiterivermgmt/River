// app/blog/page.tsx
import React from "react";
import Link from "next/link";

interface Post {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  date: string;
}

const posts: Post[] = [
  {
    title: "My First Blog Post",
    slug: "post1",
    summary: "This is a summary of my first blog post. Learn more inside.",
    coverImage: "/blog/post1-cover.jpg",
    date: "November 16, 2025",
  },
  {
    title: "Another Blog Post",
    slug: "post2",
    summary: "A short summary for the second blog post.",
    coverImage: "/blog/post2-cover.jpg",
    date: "November 17, 2025",
  },
];

const BlogPage = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-56">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white">
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
