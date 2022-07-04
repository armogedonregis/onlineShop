import Cart from "../../components/cart";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Separator from "../../components/separator";
import { Wrapper } from "../../components/wrapper";

export default function CartPage() {
  return (
    <Layout>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Separator className="hidden lg:block" />
      <Wrapper>
        <Cart />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Footer />
      </Wrapper>
    </Layout>
  );
}
