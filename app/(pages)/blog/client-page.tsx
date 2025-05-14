"use client";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { Rss } from "lucide-react";
import {
  PostConnectionQuery,
  PostConnectionQueryVariables,
} from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

interface ClientPostProps {
  data: PostConnectionQuery;
  variables: PostConnectionQueryVariables;
  query: string;
}

export default function PostsClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });

  return (
    <section>
      <h1 className="text-2xl font-bold pb-8">My Blog</h1>
      <p>
        I write about things I learn, projects I work on, and other stuff.
        Subscribe to{" "}
        <a className="link mx-1 items-center" href={"/rss.xml"}>
          RSS
          <Rss className="inline-flex mb-1 ml-1" size={16} />
        </a>{" "}
        or follow on
        <a
          href="https://x.com/nggiahao9o9"
          target="_blank"
          className="link mx-1"
        >
          Twitter
        </a>{" "}
        for updates.
      </p>
      <div className="mt-10">
        {data?.postConnection.edges.map((postData, index) => {
          const post = postData.node;
          const date = new Date(post.date);
          let formattedDate = "";
          if (!isNaN(date.getTime())) {
            formattedDate = format(date, "MMM dd, yyyy");
          }
          return (
            <Link
              key={post.id}
              className="w-full cursor-pointer py-1 transform hover:scale-[1.01] transition-all flex flex-col sm:flex-row justify-between sm:items-center"
              aria-label={post.title}
              href={`/` + post._sys.breadcrumbs.join("/")}
            >
              <div className="flex items-center">
                <span className="text-left mr-6">{Number(index) + 1}.</span>
                <h4 className="w-full focusable link">
                  {post.title}{" "}
                </h4>
              </div>
              <p className="text-xs text-left sm:text-right mt-2 sm:mt-0 mr-2 ml-8 sm:ml-0 text-zinc-600 dark:text-zinc-400">
                <time>{formattedDate}</time>
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
