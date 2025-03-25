import Link from "next/link";
import client from "@/tina/__generated__/client";
import { format } from "date-fns";

export async function LastesPost() {
  const postsResponse = await client.queries.postConnection();
  const post = postsResponse.data.postConnection.edges[0].node;
  const date = new Date(post.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <Link
      className="w-full h-36 hover:scale-95 transform-gpu duration-500 transition-all rounded-lg flex flex-col justify-between bg-[#f7f2f2] dark:bg-[#191919]"
      href={`/posts/` + post._sys.breadcrumbs.join("/")}
    >
      <div className="px-4 py-2 text-xl">
        <p className="font-semibold mb-3">Latest Post</p>
        <p className="font-bold py-3 border-y">
          {post.title}
        </p>
      </div>
      <p className="px-4 text-sm mb-2 text-[#a1a1aa]">
        {formattedDate}
      </p>
    </Link>
  );
}
