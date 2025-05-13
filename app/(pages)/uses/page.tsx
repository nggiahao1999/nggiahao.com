import { Metadata } from "next/types";
import { UsesTabs } from "@/components/misc/(uses)/uses-tab";

export const metadata: Metadata = {
  title: "nggiahao.com // uses",
  description: "A list of software and hardware that I use.",
};

const usesPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold pb-8">Uses</h1>
      <p className="pb-3">
        Here&#39;s a list of software and hardware that I use on a regular basis.
      </p>
      <p className="pb-6">
        Every once in a while someone asks me about my development environment
        or has questions about certain hardware. I thought it would be fun to
        list out everything I use here. Keep in mind, I change things around
        quite a bit, but I will try to keep this page updated. If I missed
        anything, please let me know.
      </p>
      <UsesTabs />
    </section>
  );
};

export default usesPage;
