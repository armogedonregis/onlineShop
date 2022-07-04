import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Products from "../../components/products";
import Separator from "../../components/separator";
import { Wrapper } from "../../components/wrapper";

export default function ProductsPage() {
  return (
    <Layout>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Separator className="hidden lg:block" />
      <Wrapper>
        <Products />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
