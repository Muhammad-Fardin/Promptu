import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Search & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptu is an Open-Source AI Prompting tool, create and share creative
        prompts
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
