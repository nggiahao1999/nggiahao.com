import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";
import {
  IconCloudflare,
  IconFirebase,
  IconGit,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  LogosArchlinux,
  SkillIconsDocker,
  IconLaravel,
  IconPHP,
  IconBash
} from "@/components/icons";

export type IconItem = {
  title: string
  icon: any
}

type StackLine = {
  top: IconItem[]
  bottom: IconItem[]
}

export const stackLines: StackLine = {
  top: [
    { title: 'PHP', icon: IconPHP },
    { title: 'Laravel', icon: IconLaravel },
    { title: 'Python', icon: IconPython },
    { title: 'Node.js', icon: IconNodeJS },
    { title: 'Typescript', icon: IconTypescript },
    { title: 'React.js', icon: IconReactJS },
    { title: 'Next.js', icon: IconNextJS },
    { title: 'Tailwind CSS', icon: IconTailwindcss },
    // { title: 'Golang', icon: SkillIconsGolang },
    { title: 'MySql', icon: IconMySQL },
    { title: 'Postgres', icon: IconPostgres },
  ],
  bottom: [
    { title: 'Linux', icon: LogosArchlinux },
    { title: 'Bash Script', icon: IconBash },
    { title: 'Docker', icon: SkillIconsDocker },
    { title: 'Firebase', icon: IconFirebase },
    { title: 'Cloudflare', icon: IconCloudflare },
    //Elasticsearch
    //Mac
    //PhpStorm
    { title: 'Git', icon: IconGit },
    { title: 'Vite', icon: IconVite },
  ]
}

const IconElement = ({
 data: { title: title, icon: Icon }
}: {
  data: IconItem
}) => (
  <Icon title={title} width="52" height="52" />
)

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  const ifToRightOrToBottom = (direction: string) => {
    if (direction === "left") {
      return "to right";
    } else {
      return "to bottom";
    }
  };

  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      data-testid="marquee"
      style={{
        maskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {range(0, 2).map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-4 [--gap:1rem]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse"
          )}
          data-testid={`marquee-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export const StacksCard = () => {
  return (
    <div className="h-36 flex flex-col justify-around overflow-hidden rounded-lg">
      <Marquee fade pauseOnHover>
        {stackLines.top.map(data => (
          <IconElement key={data.title} data={data} />
        ))}
      </Marquee>
      <Marquee reverse fade pauseOnHover>
        {stackLines.bottom.map(data => (
          <IconElement key={data.title} data={data} />
        ))}
      </Marquee>
    </div>
  );
};

