import React from "react";
import { Cart } from "../../models/Product";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch } from "../../app/hooks";
import { removeItemCart } from "../../app/slice/cartSlice";

const Containter = styled.div`
  ${tw`
p-2 
flex 
bg-white 
hover:bg-gray-100
cursor-pointer 
border-b 
border-gray-100
`}
`;

const CardImg = styled.div`
  ${tw`
p-2 
w-12
`}
`;

const TextContainer = styled.div`
  ${tw`
flex-auto 
text-sm 
w-32
`}
`;

const Title = styled.div`
  ${tw`
font-bold
text-xs
`}
`;

const Descr = styled.div`
  ${tw`
truncate
text-xs
`}
`;

const Quality = styled.div`
  ${tw`
text-gray-400
text-xs
`}
`;

const IconContainer = styled.div`
  ${tw`
flex 
flex-col 
w-18 
font-medium 
items-end
`}
`;

const SvgContainter = styled.div`
  ${tw`
w-4 
h-4 
mb-6 
hover:bg-red-200 
rounded-full 
cursor-pointer 
text-red-700
`}
`;

type Props = Cart;

export default function CardCart(props: Props) {
  const { title, prices, } = props;
  const dispatch = useAppDispatch();
    const RemoveItemCartBtn = () => {
      dispatch(removeItemCart(props))
    }
  

  return (
    <Containter>
      <CardImg>
        <img
          src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
          alt="img product"
        />
      </CardImg>
      <TextContainer>
        <Title>{title}</Title>
        <Quality></Quality>
      </TextContainer>
      <IconContainer>
        <SvgContainter onClick={RemoveItemCartBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-trash-2 "
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </SvgContainter>
        {prices}$
      </IconContainer>
    </Containter>
  );
}
