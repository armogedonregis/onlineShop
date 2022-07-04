import styled from "styled-components";
import tw from "twin.macro";

const DeliveryContainer = styled.div`
  ${tw`
  justify-between
  flex
  flex-col
  lg:flex-row

  mb-44
  `}
`;

const TextContainer = styled.div`
  ${tw`  
  mt-16
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

const Gradient = styled.div`
  &:after {
    content: "";
    position: absolute;
    left: 0rem;
    transform: translateY(150%);
    top: 0;
    z-index: -1;
    height: 40%;
    display: inline-block;
    background: linear-gradient(to top, black, #a7c957);
    opacity: 50%;
    border-radius: 10px;
  }

  ${tw`relative after:w-full after:lg:w-[110%] lg:mr-14`}
`;

const Image = styled.img`
  ${tw`
  lg:w-[450px]
  `}
`;

export default function Delivery() {
  return (
    <DeliveryContainer>
      <Gradient>
        <Image src="./assets/images/man.png" />
      </Gradient>
      <TextContainer>
        <MainHeading>Fast Delivery</MainHeading>
        <Price>Within 30 minutes</Price>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Description>
        <Button>Order</Button>
      </TextContainer>
    </DeliveryContainer>
  );
}
