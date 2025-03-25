"use client";

import { ArcticonsLastfmscrobbler } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export const MusicCard = () => {
  const artist = "Bruno Mars"
  const cover = "https://lastfm.freetls.fastly.net/i/u/300x300/5b78db81b3cbb566d5b6a7ca1a22af02.jpg"
  const title = "Die With A Smile"
  const url = "https://www.youtube.com/watch?v=kPa7bsKwL-c"

  return (
    <Link
      className="bg-black h-36 text-white rounded-lg items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
      target="_blank"
      href={url}
    >
      <ArcticonsLastfmscrobbler width="50px" height="50px" className="text-red-800 absolute left-0 top-0" />
      <p className="-rotate-90 text-white font-extrabold mt-11 mb-2 ml-10">
        <span className="truncate">
            {artist}
        </span>
        <br />
        <span className="absolute text-sm font-normal truncate">{title}</span>
      </p>
      <Image
        src={cover}
        alt={title!}
        className={`blur-lg absolute -bottom-3 -left-12  brightness-50`}
        width={500}
        height={500}
      />
      <Image
        src={cover}
        alt={title!}
        className={`absolute rounded-full -bottom-10 -left-14 overflow-hidden animate-slow-spin`}
        placeholder="empty"
        width={200}
        height={200}
      />
    </Link>
  );
};
