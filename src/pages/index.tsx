import type { NextPage } from "next";
import Blog from "../components/blog";
import Delivery from "../components/delivery";
import FeaturedProducts from "../components/featuredProducts";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Separator from "../components/separator";
import { Wrapper } from "../components/wrapper";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Separator className="hidden lg:block" />
      <Wrapper>
        <Hero />
      </Wrapper>
      <Separator />
      <FeaturedProducts />
      <Wrapper>
        <Delivery />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Blog />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
