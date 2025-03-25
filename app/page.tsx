import GridCards from "@/components/misc/(home)/grid-cards";
import Intro from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    <>
      <h1 className="mb-1 text-xl font-medium dark:text-white">
        Nguyễn Gia Hào
      </h1>
      <h2 className="text-base text-zinc-600 dark:text-zinc-400">
        Software Engineer, Vietnam
      </h2>
      <Intro />
      <GridCards />
    </>
  );
};

export default Home;
