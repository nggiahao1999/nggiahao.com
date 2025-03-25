import client from "@/tina/__generated__/client";
import PostsClientPage from "./client-page";

export default async function PostsPage() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }

  return (
    <PostsClientPage {...posts} />
  );
}
