import React from "react";
import client from "@/tina/__generated__/client";
import PostClientPage from "./client-page";

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.post({
    relativePath: `${params.filename.join("/")}.mdx`,
  });

  return (
    <PostClientPage {...data} />
  );
}

export async function generateStaticParams() {
  const posts = await client.queries.postConnection();
  const paths = posts.data?.postConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));
  return paths || [];
}
