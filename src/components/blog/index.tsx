import styled from "styled-components";
import tw from "twin.macro";
import Header from "../header";

const BlogContainer = styled.div`
  ${tw`
flex
flex-col
items-center
mt-24
mb-20
`}
`;

const CardsContainer = styled.div`
  ${tw`my-20
  w-11/12
  flex-wrap
  justify-center
  flex
  `}
`;

const Card = styled.div`
  ${tw`
  relative
  m-6
  shadow-lg
  w-[25rem]
  `}
`;

const Image = styled.img`
  ${tw`
  h-[15rem]
  rounded-t-lg
  
  object-cover`}
`;

const Gradient = styled.div`
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(to top, black, #a7c957);
    opacity: 40%;
    border-radius: 10px;
  }
`;

const CardFooter = styled.div`
  ${tw`
  pt-3
  pb-7
  px-6
  justify-between
  tracking-wider
  flex
  bg-primaryFocus
  opacity-80
  rounded-b-xl
  `}
`;

const TextContainer = styled.div`
  ${tw`
  w-10/12
  `}
`;
const Title = styled.h2`
  ${tw`
  text-white
  uppercase
  font-bold
  my-3
  `}
`;
const Description = styled.p`
  ${tw`
  text-white
  text-xs
  `}
`;

const More = styled.img``;

export default function Blog() {
  return (
    <BlogContainer>
      <Header greenFirst firstText="Our" secondText="blog posts" />
      <CardsContainer>
        <Card>
          <div className="relative">
            <Gradient>
              <Image src="./assets/images/coffee.png" />
            </Gradient>
          </div>
          <CardFooter>
            <TextContainer>
              <Title>What's your Christmas ass?</Title>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Description>
            </TextContainer>
            <More src="./assets/vector/chevron-right.svg" />
          </CardFooter>
        </Card>
        <Card>
          <div className="relative">
            <Gradient>
              <Image src="./assets/images/coffee.png" />
            </Gradient>
          </div>
          <CardFooter>
            <TextContainer>
              <Title>What's your Christmas ass?</Title>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Description>
            </TextContainer>
            <More src="./assets/vector/chevron-right.svg" />
          </CardFooter>
        </Card>
        <Card>
          <div className="relative">
            <Gradient>
              <Image src="./assets/images/coffee.png" />
            </Gradient>
          </div>
          <CardFooter>
            <TextContainer>
              <Title>What's your Christmas ass?</Title>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Description>
            </TextContainer>
            <More src="./assets/vector/chevron-right.svg" />
          </CardFooter>
        </Card>
        <Card>
          <div className="relative">
            <Gradient>
              <Image src="./assets/images/coffee.png" />
            </Gradient>
          </div>
          <CardFooter>
            <TextContainer>
              <Title>What's your Christmas ass?</Title>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Description>
            </TextContainer>
            <More src="./assets/vector/chevron-right.svg" />
          </CardFooter>
        </Card>
      </CardsContainer>
    </BlogContainer>
  );
}
