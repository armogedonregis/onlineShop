import styled from "styled-components";
import tw from "twin.macro";

type LogoTypes = {
  className?: string;
};

const LogoContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const GroceryHeading = styled.h1`
  ${tw`
  w-5/12
  text-base
  text-primary
  leading-3
  font-bold
  pl-4
  `}
`;

const ShopHeading = styled.span`
  ${tw`
    text-primaryFocus
    text-3xl
  `}
`;

const Logo = styled.img`
  ${tw`
  w-14
  `}
`;

export default function LogoImg({ className }: LogoTypes) {
  return (
    <LogoContainer className={className}>
      <Logo src="./assets/images/logo.png" />
      <GroceryHeading>
        Grocery <ShopHeading>Shop</ShopHeading>
      </GroceryHeading>
    </LogoContainer>
  );
}
