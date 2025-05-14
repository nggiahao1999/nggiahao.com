import {
  GithubStats,
  LatestPost,
  StacksCard,
  MusicCard,
  GithubLink,
} from "@/components/misc/(home)/cards";
import Link from "next/link";
import Image from "next/image";
import animePic from "@/public/images/(nav)/anime.webp";
import companyPic from "@/public/images/(nav)/company.webp";
import { Codepen, Facebook, Linkedin } from "lucide-react";
import { RiTwitterXFill } from "@/components/icons";

export default function GridCards() {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
        <div className="col-span-3">
          <GithubLink />
        </div>
        <div className="col-span-2">
          <GithubStats />
        </div>
        <MusicCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div className="grid grid-cols-3 gap-2 h-36">
          <Link href={"/anime"}
                className="row-span-2 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
            <Image
              className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg brightness-75 dark:brightness-50"
              src={animePic}
              alt="anime"
              placeholder="blur"
              priority
            />
          </Link>
          <a
            href="https://www.linkedin.com/in/nggiahao"
            target="_blank"
            className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
          >
            <Linkedin />
            <p className="text-[12px] text-white/90 -rotate-3">
              (serious stuff 😤)
            </p>
          </a>
          <a
            href="https://x.com/nggiahao9o9"
            target="_blank"
            className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
          >
            <RiTwitterXFill className="text-2xl" />
            <p className="text-[12px] text-white/55 ">(share memes ;)</p>
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-black bg-[#ebf0f4] w-full"
          >
            <Codepen className="text-2xl" />
            <p className="text-[12px]">(web drafts)</p>
          </a>
          <a
            href="https://www.facebook.com/hao.dajgja"
            target="_blank"
            className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
          >
            <Facebook />
            <p className="text-[12px] text-white/90 -rotate-3">
              (my life :D)
            </p>
          </a>
        </div>
        <StacksCard />
        <LatestPost />
        <Link href={"/"}
          className="h-36 rounded-lg overflow-hidden relative hover:scale-95 duration-500 transform-gpu">
          <Image
            className="absolute w-full h-full object-cover bottom-0 left-0 right-0 top-0 -z-30 dark:brightness-90"
            src={companyPic}
            alt="vnp group"
            placeholder="blur"
            priority
          />
        </Link>
      </div>
    </>
  );
}
