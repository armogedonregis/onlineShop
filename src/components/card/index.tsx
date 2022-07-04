import React, { useState } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch } from '../../app/hooks';
import { addToCart, removeItemCart } from '../../app/slice/cartSlice';
import { Product } from '../../models/Product';



const CardProduct = styled.div`
${tw`  
bg-white
  rounded-lg
  border-2
  border-gray-100
  w-[16rem]
  mx-3
  mb-9
  px-8
  pb-3
`}
`;

const CardCat = styled.h2`
${tw`  
text-accent
text-sm
font-semibold
mb-3
`}
`;

const CardTitle = styled.h2`
${tw`    
text-xl
font-bold
mb-2
`}
`;

const CardPrice = styled.p`
${tw`    
text-sm
font-bold
text-accent
mb-2
`}
`;

const CardRaiting = styled.div`
${tw`    
flex
pb-7
`}
`;

const CardReviews = styled.p`
${tw`    
text-xs
ml-3
`}
`;

const CardAdd = styled.div`
${tw`    
flex
justify-between
mb-5
`}
`;

const CardText = styled.button`
${tw`
flex

pl-1
uppercase 
font-semibold 
opacity-70   
`}
`;

type Props = Product

export default function Card(props: Props) {

    const { imageUrl, category, title, price, raiting, id } = props
    const dispatch = useAppDispatch()
    const addToCartBtn = () => {
      dispatch(addToCart(props))
    }
    const RemoveItemBtn = () => {
      dispatch(removeItemCart(props))
    }

  return (
      <CardProduct key={id}>
        <img src={imageUrl} />
          <CardCat>{category}</CardCat>
          <CardTitle>{title}</CardTitle>
            <CardPrice>{price}$</CardPrice>
            <CardRaiting>
                  <img src="./assets/vector/Rait stars.svg" />
                      <CardReviews>{raiting}</CardReviews>
                        </CardRaiting>
                        <CardAdd> 
                            <CardText onClick={addToCartBtn}><img className='mr-1' src="./assets/vector/addToCart.svg" />ADD TO CART</CardText>
                            <img src="./assets/vector/favorite.svg" />
                        </CardAdd>
        </CardProduct>
  )
};

