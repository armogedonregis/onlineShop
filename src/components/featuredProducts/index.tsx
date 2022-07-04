import styled from "styled-components";
import tw from "twin.macro";
import Header from "../header";

const ProductsContainer = styled.div`
  ${tw`
  w-full
  my-36
  bg-gradient-to-t
  from-[#E6F1E0]
  `}
`;

const Menu = styled.ul`
  ${tw`
  flex
  mt-8
  justify-center
  flex-wrap
  lg:w-auto
  w-7/12
  flex-row
  `}
`;
const Item = styled.li`
  ${tw`
  font-bold
  uppercase
  pb-1
  first:text-accent
  first:border-accent
  mx-7
  my-2
  hover:text-accent
  hover:border-accent
  border-white
  border-b-2
  `}
`;

// Card

const CardsContainer = styled.div`
  ${tw`
  mt-10
  flex
  flex-wrap
  justify-center
  mb-36
  `}
`;

const Card = styled.div`
  ${tw`
  bg-white
  rounded-lg
  border-2
  border-gray-100
  w-[19rem]
  mx-2
  my-3
  px-8
  py-4
`}
`;

const Image = styled.img``;

const Category = styled.h3`
  ${tw`
  text-accent
  text-sm
  font-semibold
  mb-3
  `}
`;

const Title = styled.h2`
  ${tw`
  text-xl
  mb-3
  w-10/12
  font-bold
  `}
`;

const Price = styled.h3`
  ${tw`
  text-accent
  mb-3
  text-sm
  `}
`;

const CartContainer = styled.div`
  ${tw`
  mt-8
  flex
  justify-between
  mb-5
  `}
`;

const ButtonCart = styled.button`
  ${tw`
  flex
  `}
`;

const Favorite = styled.img`
  ${tw`
  opacity-70
  `}
`;

const FeaturedContainer = styled.div`
  ${tw`flex flex-col items-center justify-center max-w-screen-xl m-auto`}
`;

export default function FeaturedProducts() {
  return (
    <ProductsContainer>
      <FeaturedContainer>
        <Header firstText="Featured" secondText="products" greenSecond />
        <Menu>
          <Item>
            <a href="#">Organic</a>
          </Item>
          <Item>
            <a href="">Fruits</a>
          </Item>
          <Item>
            <a href="">Seafood</a>
          </Item>
          <Item>
            <a href="">Wine & beer</a>
          </Item>
          <Item>
            <a href="">Bakery</a>
          </Item>
        </Menu>
        <CardsContainer>
          <Card>
            <Image src="./assets/images/tomato.png" width={300} />
            <Category>Fruits & Vegetables</Category>
            <Title>Super Juicy Tomatoes 400g</Title>
            <Price>$10.50</Price>
            <CartContainer>
              <ButtonCart>
                <img src="./assets/vector/addToCart.svg" />
                <span className="ml-3 uppercase font-semibold opacity-70">
                  Add to cart
                </span>
              </ButtonCart>
              <Favorite src="./assets/vector/favorite.svg" />
            </CartContainer>
          </Card>
          <Card>
            <Image src="./assets/images/tomato.png" width={300} />
            <Category>Fruits & Vegetables</Category>
            <Title>Super Juicy Tomatoes 400g</Title>
            <Price>$10.50</Price>
            <CartContainer>
              <ButtonCart>
                <img src="./assets/vector/addToCart.svg" />
                <span className="ml-3 uppercase font-semibold opacity-70">
                  Add to cart
                </span>
              </ButtonCart>
              <Favorite src="./assets/vector/favorite.svg" />
            </CartContainer>
          </Card>
          <Card>
            <Image src="./assets/images/tomato.png" width={300} />
            <Category>Fruits & Vegetables</Category>
            <Title>Super Juicy Tomatoes 400g</Title>
            <Price>$10.50</Price>
            <CartContainer>
              <ButtonCart>
                <img src="./assets/vector/addToCart.svg" />
                <span className="ml-3 uppercase font-semibold opacity-70">
                  Add to cart
                </span>
              </ButtonCart>
              <Favorite src="./assets/vector/favorite.svg" />
            </CartContainer>
          </Card>
          <Card>
            <Image src="./assets/images/tomato.png" width={300} />
            <Category>Fruits & Vegetables</Category>
            <Title>Super Juicy Tomatoes 400g</Title>
            <Price>$10.50</Price>
            <CartContainer>
              <ButtonCart>
                <img src="./assets/vector/addToCart.svg" />
                <span className="ml-3 uppercase font-semibold opacity-70">
                  Add to cart
                </span>
              </ButtonCart>
              <Favorite src="./assets/vector/favorite.svg" />
            </CartContainer>
          </Card>
        </CardsContainer>
      </FeaturedContainer>
    </ProductsContainer>
  );
}
