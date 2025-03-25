import Image from "next/image";
import ghCat from "@/public/images/(home)/0002.jpg";
import { Github } from "lucide-react";
import React from "react";

export const GithubLink = () => {
  return (
    <a
      className="relative h-full w-full flex flex-col justify-between overflow-hidden rounded-lg text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group group-hover:scale-95 active:scale-100 hover:scale-95"
      href="https://github.com/nggiahao1999"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={ghCat}
          alt="cat img"
          priority={true}
          className="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] "
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6">
        <Github />
      </span>
      <span className="px-6 pb-6">
        <b>GitHub</b><br/>
        <span className="text-sm">My experiments (aka projects)</span>
      </span>
    </a>
  );
};

export const GithubStats = () => {
  // const { issues, prs, followers, stars } = await getGHStats();
  const issues = null;
  const repositories = null;
  const followers = null;
  const stars = null;

  return (
    <a
      href="https://github.com/nggiahao1999"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#f7f2f2] dark:bg-[#0d1117] rounded-lg h-36 relative group hover:scale-95 duration-500 transform-gpu"
    >
      <BackgroundPattern />
      <ul className="flex flex-row flex-wrap gap-x-6 sm:gap-x-4 md:gap-x-6 absolute bottom-1 p-2">
        <GitHubStatsData label="Stars" value={stars} />
        <GitHubStatsData label="Followers" value={followers} />
        <GitHubStatsData label="Repositories" value={repositories} />
        <GitHubStatsData label="Issues" value={issues} />
      </ul>
    </a>
  );
};

const GitHubStatsData = ({ label, value }: {
  label: React.ReactNode;
  value: number;
}) => {
  return (
    <li>
      <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">
        {label}:
      </span>
      {value ?? 'n/a'}
    </li>
  );
};

const BackgroundPattern = () => {
  let seed = 1;

  function seededRandom() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  const colours = ["#39d353", "#0e4429", "#0e4429", "#006d32", "#161b22"];
  const days = new Array(51)
    .fill(null)
    // eslint-disable-next-line no-unused-vars
    .map(_ => colours[Math.floor(seededRandom() * colours.length)]);
  return (
    <div className="top-0 z-1 grid grid-cols-12 grid-rows-6 gap-1">
      {days.map((c, i) => (
        <div
          key={i}
          className="size-4 rounded-[0.2rem]"
          style={{ background: c }}
        />
      ))}
    </div>
  );
};
