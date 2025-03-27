"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

import work from "@/public/images/(nav)/work.webp";
import books from "@/public/images/(nav)/books.webp";
import anime from "@/public/images/(nav)/anime.webp";
import music from "@/public/images/(nav)/music.webp";
import faqs from "@/public/images/(nav)/faqs.webp";
import uses from "@/public/images/(nav)/uses.webp";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="-mt-3 rounded-full px-2 md:px-3 py-1 md:py-2">
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-white grid w-[150px] gap-2 md:gap-3 p-2 md:p-4 md:w-[300px] md:grid-cols-2 lg:w-[350px]">
              <ListItem
                title="music"
                href="/music"
                className="relative z-10 hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md brightness-50"
                  src={music}
                  alt="music"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="anime"
                href="/anime"
                className="relative z-10 hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md brightness-50"
                  src={anime}
                  alt="anime"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="books"
                href="/books"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md brightness-50"
                  src={books}
                  alt="books"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="papers"
                href="/papers"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md brightness-50"
                  src={work}
                  alt="work"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="uses"
                href="/uses"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md brightness-50"
                  src={uses}
                  alt="uses"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="faqs"
                href="/faqs"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                  src={faqs}
                  alt="faqs"
                  placeholder="blur"
                />
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
