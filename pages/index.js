import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import Blog from "../components/blog";
import Expertise from "../components/expertise";
import Layout, { website } from "../components/layout";
import Project from "../components/project";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{website.defaultTitle}</title>
      </Head>
      <Banner />
      <Expertise />
      <Project />
      <About />
      <Blog />
    </Layout>
  );
}
