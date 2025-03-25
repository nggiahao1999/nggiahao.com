import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nggiahao // books",
  description:
    "Find some of my favorite book collections and the one currently reading.",
};

const booksPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Books</h1>
        <p className="mb-6">
          Aside from reading many lines of code, errors, and pages of
          documentation, when I find some time or feel like delving into a topic
          in depth, I often turn to books for their excellent in-depth
          explanations and often fun.
        </p>
        <p className="mb-6">
          If it is not something related to my work, or a mystery or sci-fi
          story book or novel, I opt for the audiobook version and enjoy it
          either while traveling or at bedtime.
        </p>
      </div>
    </section>
  );
};

export default booksPage;
