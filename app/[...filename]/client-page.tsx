"use client";
import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { format } from "date-fns";
import { PostQuery } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/mdx-components";


interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostClientPage(props: ClientPostProps) {
  const { data } = useTina({ ...props });
  const post = data.post;

  const date = new Date(post.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "d-M-yyyy");
  }

  return (
    <section>
      <h1 className="text-2xl font-bold pb-4" data-tina-field={tinaField(post, "title")}>
        {post.title}
      </h1>
      <div className="mb-12 text-sm text-zinc-600 dark:text-zinc-400 italic">
        <span>• </span>
        {post.author && (
          <>
            <span
              data-tina-field={tinaField(post.author, "name")}
              className="font-medium"
            >
              {post.author.name}
            </span>
            <span className="font-bold inline-block mx-2">
                •
              </span>
          </>
        )}
        <span
          data-tina-field={tinaField(post, "date")}
        >
          {formattedDate}
        </span>
      </div>
      <article
        data-tina-field={tinaField(post, "_body")}
        className="prose dark:prose-invert"
      >
        <TinaMarkdown components={components} content={post._body} />
      </article>
    </section>
  );
}
