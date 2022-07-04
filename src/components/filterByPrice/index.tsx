import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  BlockTitle,
  List,
  ListItem,
  Range,
} from 'konsta/react';

const Categories = styled.div`
${tw`
mt-10
ml-2
lg:ml-8
lg:w-10/12
w-full
`}
`;

const CategoryFilter = styled.button`
${tw`
mb-2
font-bold
flex
relative
`}
`;

const Separ = styled.div`
border: 0.5px solid #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  ${tw`
  inline-block
  lg:w-full
  w-10/12
`}
`;

const CategoryPrice = styled.div`
${tw`    
flex
items-center
`}
`;



export default function FilterPrice({
    titleCat,
    price,
    setPrice,
})
    {
      const [scrollFilter, setScrollFilter] = useState<boolean>(true)
      const openCloses = () => setScrollFilter(!scrollFilter);
    return (                
                <Categories>
                  <CategoryFilter
                  onClick={openCloses}
                  >{titleCat} <img 
                className="lg:absolute lg:left-60 lg:bottom-2 lg:visible invisible"
                src="./assets/vector/shevron.svg" 
                />
                </CategoryFilter>
                {scrollFilter &&
                  <>
                  <CategoryPrice>Price: ${price}</CategoryPrice>
      <List>
        <ListItem
          innerClassName="flex lg:space-x-4 lg:w-full w-9/12"
          innerChildren={
            <>
              <span>$0</span>
              <Range
                value={price}
                step={1}
                min={0}
                max={5000}
                onChange={setPrice}
              />
              <span>$5000</span>
            </>
          }
        />
      </List>
                  </>
    }
                  <Separ />
              </Categories>
    );
}
