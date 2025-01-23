import Link from "next/link";
import getAllPosts from "./lib/getAllPosts";


export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-5xl mx-auto py-10 px-3 sm:px-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <Link href={`/blog/${post.id}`}>
              <p className="text-blue-500 hover:underline text-lg font-medium">
                {post.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
