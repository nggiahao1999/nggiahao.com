"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Rss } from "lucide-react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
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
      <div className="pb-10">
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
            href="https://x.com/nggiahao"
            target="_blank"
            className="link mx-1"
          >
            Twitter
          </a>{" "}
          for updates.
        </p>
      </div>
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
            className="w-full cursor-pointer"
            aria-label={post.title}
            href={`/posts/` + post._sys.breadcrumbs.join("/")}
          >
            <div className="w-full py-1 transform hover:scale-[1.01] transition-all">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="flex items-center">
                  <div className="text-left mr-6">{Number(index) + 1}.</div>
                  <h4 className="w-full focusable link">
                    {post.title}{" "}
                  </h4>
                </div>
                <div className="flex items-center mt-2 sm:mt-0  justify-between">
                  <p className="text-xs text-left sm:text-right md:mb-0 mr-2 ml-8 sm:ml-0 text-text/70">
                    <time>{formattedDate}</time>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
