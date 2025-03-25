"use client";
import React from "react";
import Image from "next/image";
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
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <main>
      <div>
        <h1
          data-tina-field={tinaField(post, "title")}
        >
            {post.title}
        </h1>
        <div
          data-tina-field={tinaField(post, "author")}
          className="flex items-center justify-center mb-16"
        >
          {post.author && (
            <>
              <div className="flex-shrink-0 mr-4">
                <Image
                  data-tina-field={tinaField(post.author, "avatar")}
                  className="h-14 w-14 object-cover rounded-full shadow-sm"
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={500}
                  height={500}
                />
              </div>
              <p
                data-tina-field={tinaField(post.author, "name")}
                className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
              >
                {post.author.name}
              </p>
              <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
                —
              </span>
            </>
          )}
          <p
            data-tina-field={tinaField(post, "date")}
            className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
          >
            {formattedDate}
          </p>
        </div>
      </div>
      {post.featureImage && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(post, "featureImage")}
            className="relative max-w-4xl lg:max-w-5xl mx-auto"
          >
            <Image
              src={post.featureImage}
              alt={post.title}
              className="absolute block rounded-lg w-full h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              aria-hidden="true"
              width={500}
              height={500}
            />
            <Image
              src={post.featureImage}
              alt={post.title}
              width={500}
              height={500}
              className="relative z-10 mb-14 block rounded-lg w-full h-auto opacity-100"
            />
          </div>
        </div>
      )}
      <article className={`flex-1 pt-4`}>
        <div
          data-tina-field={tinaField(post, "_body")}
          className="prose dark:prose-dark w-full max-w-none"
        >
          <TinaMarkdown components={components} content={post._body} />
        </div>
      </article>
    </main>
  );
}
