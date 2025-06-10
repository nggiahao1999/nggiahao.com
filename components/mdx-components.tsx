import { format } from "date-fns";
import React from "react";
import {
  Components,
  TinaMarkdown,
  TinaMarkdownContent,
} from "tinacms/dist/rich-text";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const components: Components<{
  BlockQuote: {
    children: TinaMarkdownContent;
    authorName: string;
  };
  DateTime: {
    format?: string;
  };
}> = {
  // code_block: (props) => <Prism {...props} />,
  code_block: (props) => {
    return (
      <SyntaxHighlighter
        language={props.lang || "javascript"}
        style={atomDark}
        customStyle={{ margin: 0, padding: "1rem", backgroundColor: "#282A36"}}
      >
        {props.value}
      </SyntaxHighlighter>
    );
  },
  BlockQuote: (props: {
    children: TinaMarkdownContent;
    authorName: string;
  }) => {
    return (
      <div>
        <blockquote>
          <TinaMarkdown content={props.children} />
          {props.authorName}
        </blockquote>
      </div>
    );
  },
  DateTime: (props) => {
    const dt = React.useMemo(() => {
      return new Date();
    }, []);

    switch (props.format) {
      case "iso":
        return <span>{format(dt, "yyyy-MM-dd")}</span>;
      case "utc":
        return <span>{format(dt, "eee, dd MMM yyyy HH:mm:ss OOOO")}</span>;
      case "local":
        return <span>{format(dt, "P")}</span>;
      default:
        return <span>{format(dt, "P")}</span>;
    }
  },
  img: (props) => (
    <span className="flex items-center justify-center">
      <Image src={props.url} alt={props.alt} width={500} height={500} />
    </span>
  ),
};
