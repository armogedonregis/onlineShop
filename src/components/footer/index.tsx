import styled from "styled-components";
import tw from "twin.macro";
import LogoImg from "../logo";

const FooterContainer = styled.footer`
  ${tw`flex flex-col items-center `}
`;

const ListContainer = styled.div`
  ${tw`
  flex
  flex-row
  flex-wrap
  lg:flex-nowrap
  lg:w-full
  justify-between
  ml-8
  lg:ml-auto
  mt-24
  mb-20
  `}
`;

const List = styled.ul`
  ${tw`
  my-4
  w-[10rem]
  lg:w-auto
  `}
`;
const Item = styled.li`
  ${tw`
  first:text-xl
  first:font-semibold
  first:mb-12
  mb-3
  `}
`;
const Copyright = styled.span`
  ${tw`
  mb-8
  `}
`;

const IconContainer = styled.div`
  ${tw`
  flex
  mb-20
  justify-between
  lg:w-1/12
  w-4/12
  `}
`;
const Icon = styled.img``;

export default function Footer() {
  return (
    <FooterContainer>
      <ListContainer>
        <List>
          <Item>Lift Media</Item>
          <Item>
            <a href="">Pricing</a>
          </Item>
          <Item>
            <a href="">Updates</a>
          </Item>
          <Item>
            <a href="">Beta</a>
          </Item>
          <Item>
            <a href="">Newsletter</a>
          </Item>
          <Item>
            <a href="">Collaborations</a>
          </Item>
        </List>
        <List>
          <Item>Product</Item>

          <Item>
            <a href="">Business</a>
          </Item>
          <Item>
            <a href="">Designers</a>
          </Item>
          <Item>
            <a href="">Classrooms</a>
          </Item>
          <Item>
            <a href="">Newcomers</a>
          </Item>
        </List>
        <List>
          <Item>Learning</Item>

          <Item>
            <a href="">Business</a>
          </Item>
          <Item>
            <a href="">Designers</a>
          </Item>
          <Item>
            <a href="">Classrooms</a>
          </Item>
          <Item>
            <a href="">Newcomers</a>
          </Item>
        </List>
        <List>
          <Item>Resources</Item>

          <Item>
            <a href="">Business</a>
          </Item>
          <Item>
            <a href="">Designers</a>
          </Item>
          <Item>
            <a href="">Classrooms</a>
          </Item>
          <Item>
            <a href="">Newcomers</a>
          </Item>
        </List>
        <List>
          <Item>About</Item>

          <Item>
            <a href="">Business</a>
          </Item>
          <Item>
            <a href="">Designers</a>
          </Item>
          <Item>
            <a href="">Classrooms</a>
          </Item>
          <Item>
            <a href="">Newcomers</a>
          </Item>
        </List>
      </ListContainer>

      <LogoImg className="justify-center mb-8" />
      <Copyright>© 2020 Grocery shop. All rights reserved. </Copyright>
      <IconContainer>
        <Icon src="./assets/vector/facebook.svg" />
        <Icon src="./assets/vector/vimeo.svg" />
        <Icon src="./assets/vector/twitter.svg" />
        <Icon src="./assets/vector/hujeta.svg" />
      </IconContainer>
    </FooterContainer>
  );
}
