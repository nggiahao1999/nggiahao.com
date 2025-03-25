import { ArrowUpRight } from "lucide-react";
import NextLink, { LinkProps } from "next/link";

const HandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 inline fill-primary"
    width="21"
    height="21"
    viewBox="0 0 256 256"
  >
    <g>
      <path
        d="m213.27 104l-18-31.18a20 20 0 0 0-34.64 20l-28-48.5A20 20 0 0 0 98 64.31l-8-13.85a20 20 0 0 0-34.64 20l12 20.83l-1.17 1a20 20 0 0 0-29.49 25.88l38 65.83a80 80 0 0 0 138.57-80Zm-57.59 60.64l.17-.1l.14.24Z"
        opacity=".2"
      />
      <path
        d="m220.2 100l-18-31.18a28 28 0 0 0-47.3-1.92l-15.34-26.59a28 28 0 0 0-48.12-.63a28 28 0 0 0-43 34.78l3.34 5.79a28 28 0 0 0-22 41.92l38 65.82a87.46 87.46 0 0 0 53.43 41a88.56 88.56 0 0 0 22.92 3A88 88 0 0 0 220.2 100Zm-6.67 62.63A72 72 0 0 1 81.63 180l-38-65.82a12 12 0 0 1 20.79-12l22 38.1a8 8 0 1 0 13.85-8l-38-65.81a12 12 0 0 1 13.5-17.59a11.9 11.9 0 0 1 7.29 5.59l34 58.89a8 8 0 0 0 13.85-8l-26-45a12 12 0 0 1 20.78-12L160 107.78a48.08 48.08 0 0 0-11 61a8 8 0 0 0 13.86-8a32 32 0 0 1 11.71-43.71a8 8 0 0 0 2.93-10.93l-10-17.32a12 12 0 0 1 20.78-12l18 31.18a71.49 71.49 0 0 1 7.25 54.62Zm-29.26-132.7a8 8 0 0 1 9.8-5.66c15.91 4.27 29 14.11 36.86 27.73a8 8 0 0 1-13.86 8c-5.72-9.92-15.36-17.12-27.14-20.27a8 8 0 0 1-5.66-9.8ZM80.91 237a8 8 0 0 1-11.24 1.33c-11-8.69-20.11-19.58-28.6-34.28a8 8 0 0 1 13.86-8c7.44 12.88 15.27 22.32 24.65 29.72A8 8 0 0 1 80.91 237Z" />
    </g>
  </svg>
);

const Link = ({ label, ...props }: { label: string } & LinkProps) => (
  <NextLink
    {...props}
    className="inline-flex items-center rounded-md px-1 font-medium text-primary transition hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
  >
    <span>{label}</span>

    <ArrowUpRight size="1em" className="text-xs" />
  </NextLink>
);

const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400 space-y-5">
      <p>
        <HandIcon />
        <span>Hello, I&apos;m <span className="text-primary">Nguyễn Gia Hào</span>. Welcome to my little corner on the web!</span>
      </p>

      <p>
        I&apos;m proficient in various programming languages and technologies, and I aspire to create products that
        help
        people
      </p>

      <p>
        I&apos;m always learning and here you can find out about the projects
        I&apos;ve completed and am working on, as well as details about my
        career and skills. I&apos;m always looking to improve, and you can
        follow my progress and what I&apos;m currently studying.
      </p>

      <p>
        See more <Link label="about me" href="/work" /> or take a look into <Link label="my projects"
                                                                                  href="/projects" />. Maybe you can
        learn something on my <Link label="blog posts" href="/blog" />
      </p>

      <svg
        aria-hidden="true"
        width="80"
        height="16"
        viewBox="0 0 432 38"
        fill="none"
        className="text-foreground/60 my-5"
      >
        <path
          d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"
          fill="currentColor"
        ></path>
      </svg>

      <p>
        If you would like to collaborate with me, please contact me via email at <Link label="giahao9899@gmail.com"
                                                                                       href="mailto:giahao9899@gmail.com" /> or
        by phone at <Link label="+84 337 551 513" href="tel:+84337551513" />.
        I hope I can help you.
      </p>
    </section>
  );
};

export default Intro;
