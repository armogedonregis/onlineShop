import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductList, filterBrand, filterCountry, filterPrice, filterProdCat, filterProdSort } from "../../app/slice/productsSlice";
import Card from "../card";
import Filter from "../filter";
import FilterPrice from "../filterByPrice";


const Container = styled.div`
${tw`
w-full
  flex
  flex-row
  justify-between
mt-10
mb-20
`}
`;

//Left menu
const Navbar = styled.div`
${tw`   
pb-10
w-5/12
flex
flex-col
flex-wrap
lg:flex-wrap
lg:w-4/12
rounded-t
border
border-gray-300
border-opacity-20
rounded-lg
`}
`;

//Right menu

const Content = styled.div`
${tw`  
ml-10
w-full
lg:w-11/12
rounded-t
justify-center
border 
border-gray-300
border-opacity-20
rounded-lg
`}
`;

//Left categories

const MenuHeader = styled.div`
${tw`    
w-auto
mt-7
mx-7
flex
justify-between
`}
`;

//Header menu product

const HeaderTitle = styled.h2`
${tw`
justify-between
font-semibold
`}
`;

const Sortby = styled.div`
${tw`    
flex
w-5/12
`}
`;

const Sort = styled.h2`
${tw`    
relative
flex
mr-2
lg:mx-10
font-bold
`}
`;

const SortDescr = styled.input`
${tw`  
mr-1
lg:mr-4
lg:w-1/3
`}
`;

//Product cart

const MenuMain = styled.div`
${tw`    
  flex
flex-wrap
  mt-12
  mb-5
  w-full
`}
`;

///

const FooterContainer = styled.div`
${tw`
relative
w-full
`}
`;

const FooterBgr = styled.div`
${tw`
`}
`;

const FormContainter = styled.div`
${tw`
absolute
w-full
top-10
left-20
flex
flex-wrap
`}
`;

const FormInput = styled.input`
${tw`
`}
`;

///

const Pagination = styled.div`
${tw`   
flex
justify-center
my-3
`}
`;

const PaginationNext = styled.button`
border-radius: 50px/40px;
${tw`   
mx-1 
px-2.5
bg-opacity-25
`}
`;


const Products = () => {
  const PAGE_LIMIT: number = 6

  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.products)
  const [activePage, setActivePage] = useState<number>(0)
  const [price, setPrice] = useState<number>(5000);
  const NextPage = () => setActivePage(activePage+1);
  const PrevPage = () => setActivePage(activePage-1);

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

    const { pagItems, pagStart, pagEnd } = useMemo(() => {
    const pageLimit = Math.ceil(products.length / PAGE_LIMIT)
    let pagItems: JSX.Element[] = []

    for (let i=0; i < pageLimit; i++) {
      pagItems.push(
        <PaginationNext
        className={i === activePage ? "bg-accent" : PaginationNext}
        key={i}
        onClick={() => setActivePage(i)}
        >
          {i + 1}
        </PaginationNext>
      )
    }
    const pagStart = activePage * PAGE_LIMIT
    const pagEnd = pagStart + PAGE_LIMIT
   return {
     pagItems,
     pagStart,
     pagEnd
  }
  }, [activePage, products.length])

  
  const onSelectChange = (e: any) => {
      const { target: {  value } } = e
      dispatch(filterProdSort(value))
  }

  const category = (e: any) => {
    const { target: {  value } } = e
    dispatch(filterProdCat(value))
  }

  const country = (e: any) => {
    const { target: {  value } } = e
    dispatch(filterCountry(value))
  }

  const brand = (e: any) => {
    const { target: {  value } } = e
    dispatch(filterBrand(value))
  }

  const onPrice = (e: any) => {
    setPrice(e.target.value)
    dispatch(filterPrice(e.target.value))
  }
  

  return (
    <Container>
          <Navbar>
              <Filter
                titleText={"CATEGORIES"}
                textOne={'Organic'} buttonOne={category}
                textTwo={"Fruits"} 
                textThree={"Seafood"} 
                textFour={"Fruits & Vegetables"} 
                textFive={"Backery"} />
              <FilterPrice
          titleCat={"Filter by price"} price={price} setPrice={onPrice} />
              <Filter titleText={"BRAND"} buttonOne={brand}
        textOne={"Adidas"}
        textTwo={"Milk"}
        textThree={"Crab"}
        textFour={"Ferm"}
        textFive={"Crous"}  />
              <Filter titleText={"COUNTRY"} buttonOne={country}
        textOne={"Austria"}
        textTwo={"France"}
        textThree={"Germany"}
        textFour={"Netherland"}
        textFive={"Sweden"}  />
          </Navbar>
          <Content>
              <MenuHeader>
                  <HeaderTitle>Fruits(99)</HeaderTitle>
                  <Sortby>
                      <Sort>Sort by:</Sort>
                      <SortDescr
                      as="select"
                      name="sortBy"
                      onChange={onSelectChange}
                      >
                      <option value='LOW'>Low to High</option>
                      <option value='HIGH'>High to Low</option>
                      </SortDescr>
                  </Sortby>
              </MenuHeader>
              {/* <MenuMain> */}
                {/* {products.length ? products.slice(pagStart, pagEnd).map((item, id) => {
                  return (
                    <Card key={id} {...item} />
                  )
                }) : <h4 className='pl-3'>Products not found</h4>
                }  */}

                <FooterContainer>
                  <FooterBgr>
                      <img src="./assets/images/hero_2.png" />
                      <FormContainter>
                        <FormInput placeholder="Ваше имя">
                          <img src="" />
                        </FormInput>
                        <FormInput placeholder="Ваш телефон">
                          <img src="" />
                        </FormInput>
                        <FormInput placeholder="Ваш email">
                          <img src="" />
                        </FormInput>
                        <FormInput placeholder="Комментарий...">
                          <img src="" />
                          <img src="" />
                        </FormInput>
                      </FormContainter>
                  </FooterBgr>
                </FooterContainer>
              {/* </MenuMain> */}
               <Pagination>
                {activePage >= 1 &&
                  <img 
                  onClick={PrevPage}
                  src="./assets/vector/arrow-left.svg"
                  className="mr-1" 
                  width={5}
                  />
                }
                  {pagItems}
                  {activePage < (pagItems.length - 1) &&
                  <img
                  onClick={NextPage}
                  src="./assets/vector/arrow-right.svg" 
                  className="ml-1"
                  width={5}
                  />
                  }
              </Pagination>           
          </Content>
      </Container>
  );
}

export default Products;
