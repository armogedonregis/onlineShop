import styled from "styled-components";
import tw from "twin.macro";

const HeroContainer = styled.div`
  ${tw`
  flex
  flex-col
  justify-between
  mt-20
  lg:mt-40
  mb-32
  `}
`;

// Content

const InfographicContainer = styled.div`
  ${tw`
  flex
  justify-between
  items-center
  flex-col
  lg:flex-row
  relative
  `}
`;

const ContentContainer = styled.div`
  ${tw`
  lg:w-6/12
  w-full
  
  `}
`;

const MainHeading = styled.h1`
  ${tw`
  text-6xl
  lg:text-7xl
  font-bold
  tracking-wider
  `}
`;

const Price = styled.p`
  ${tw`
  text-2xl
  text-primaryFocus
  my-12
  font-normal
  `}
`;

const Description = styled.p`
  ${tw`
  text-2xl
  w-11/12
  my-8
  font-normal
  `}
`;

const Button = styled.button`
  ${tw`
  uppercase
  text-2xl
  font-medium
  hover:opacity-80
  text-white
  bg-gradient-to-t from-accent to-primaryFocus
  px-16
  my-10
  rounded-full
  py-3
  `}
`;

// Image

const ImageContainer = styled.div`
  &:after {
    content: "";
    display: block;
    position: absolute;
    ${tw`bg-gradient-to-r from-primary to-accent`}
    opacity: 70%;
    width: 100%;
    border-radius: 80% 70% / 60% 100%;
    ${tw`w-full lg:w-[110%] h-[15rem] sm:h-[30rem] lg:h-[40rem]`}
    z-index: -1;
  }

  ${tw`
  after:top-0
  mt-12
  hidden
  lg:block
  lg:mt-0
  after:lg:-top-20
  after:transform
  after:lg:translate-x-96
  relative
  `}
`;

const VegetablesImage = styled.img`
  ${tw`
  z-10
  ml-4
  lg:ml-48
  `}
`;

// Icons

const IconsContainer = styled.div`
  ${tw`
  flex
  flex-row
  flex-wrap
  justify-between
  mt-2
  lg:mt-24
  `}
`;

const IconContainer = styled.div`
  ${tw`
  mt-20
  sm:w-6/12
  lg:w-auto
  lg:mt-10
  flex
  items-center
  `}
`;

const TextContainer = styled.div`
  ${tw`
  ml-3
  `}
`;

const Icon = styled.img`
  ${tw`
  w-12
  `}
`;

const IconHeading = styled.h2`
  ${tw`
  font-bold
  uppercase
  `}
`;

const IconParagraph = styled.p`
  ${tw`
  text-primaryFocus
  text-xs
  `}
`;

export default function Hero() {
  return (
    <HeroContainer>
      <InfographicContainer>
        <ContentContainer>
          <MainHeading>Bell Pepper</MainHeading>
          <Price>14.99$ per item</Price>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            laboriosam doloremque.
          </Description>
          <Button>Buy</Button>
        </ContentContainer>
        <ImageContainer>
          <VegetablesImage width={750} src="./assets/images/vegetables.png" />
        </ImageContainer>
      </InfographicContainer>
      <IconsContainer>
        <IconContainer>
          <Icon src="./assets/vector/delivery.svg" />
          <TextContainer>
            <IconHeading>Free Delivery</IconHeading>
            <IconParagraph>For all products above 100$</IconParagraph>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <Icon src="./assets/vector/return.svg" />
          <TextContainer>
            <IconHeading>30 days return</IconHeading>
            <IconParagraph>For all products above 100$</IconParagraph>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <Icon src="./assets/vector/payment.svg" />
          <TextContainer>
            <IconHeading>Secure payment</IconHeading>
            <IconParagraph>For all products above 100$</IconParagraph>
          </TextContainer>
        </IconContainer>
        <IconContainer>
          <Icon src="./assets/vector/support.svg" />
          <TextContainer>
            <IconHeading>Customer support 24/7</IconHeading>
            <IconParagraph>For all products above 100$</IconParagraph>
          </TextContainer>
        </IconContainer>
      </IconsContainer>
    </HeroContainer>
  );
}
