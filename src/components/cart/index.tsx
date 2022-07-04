import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "../../app/hooks";
import { getTotalPrice } from "../../app/slice/cartSlice";

const Container = styled.div`
${tw`   
w-full
lg:flex
flex-row
justify-between
mt-20
mb-20
`}
`;

const CartList = styled.div`
${tw`   
justify-between
lg:w-6/12
`}
`;

const ListTitle = styled.h2`
${tw`   
text-3xl
font-bold
`}
`;

const ListMenu = styled.div`
${tw`   
flex
lg:justify-between
justify-around
mb-2
mt-10
`}
`;

const Shopping = styled.div`
${tw`   
flex
`}
`;

const ShoppingButton = styled.button`
${tw`   
text-primaryFocus
font-light
text-xs
`}
`;

const Remove = styled.div`
${tw`   
flex
`}
`;

const RemoveTitle = styled.button`
${tw`   
text-primaryFocus
font-light
text-xs
`}
`;

const CartImg = styled.img`
${tw`   
w-1/5
mr-2
`}
`;

const CartMenu = styled.div`
${tw`   
flex
lg:justify-between
justify-evenly
w-full
items-center
`}
`;

const CartCategory = styled.div`
${tw`  
flex
items-center
`}
`;

const PriceAdd = styled.div`
${tw` 
flex
`}
`;

const Product = styled.div`
${tw`   
`}
`;

const Category = styled.h3`
${tw`   
text-xs
text-accent
`}
`;

const Title = styled.h2`
${tw`   
mt-2
text-sm
font-bold
`}
`;

const CartAdd = styled.div`
${tw`   

`}
`;

const CartPrice = styled.h3`
${tw`   
mr-2
mt-6
text-sm
opacity-50
`}
`;

const PriceImg = styled.img`
${tw`
mt-5
`}
`;

const CheckoutContent = styled.div`
${tw`
lg:w-4/12
px-2
`}
`;

const Checkout = styled.div`
${tw`   
rounded-t
border 
border-gray-300
border-opacity-20
shadow-md
rounded-lg
px-10
mt-6
`}
`;

const Total = styled.div`
${tw`   
flex
justify-between
mt-9
text-lg
`}
`;

const Promocode = styled.div`
${tw`
mt-5
flex
justify-between
text-lg
`}
`;

const Delivery = styled.div`
${tw`   
mt-10
flex
justify-between
text-lg
`}
`;

const Separ = styled.div`
${tw`
border
border-accent
opacity-10
relative
top-64
`}
`;

const Estimated = styled.div`
${tw`   
flex
justify-between
mt-24
text-lg
font-bold
`}
`;

const CheackoutContainer = styled.div`
${tw`
flex
flex-col
`}
`;

const CheckoutButton = styled.button`
${tw`
text-lg
font-bold
hover:opacity-80
text-white
bg-primaryFocus
px-20
mt-16
mb-5
rounded-lg
py-3
`}
`;


const CheakCont = styled.div`
${tw`
text-center
`}
`;

const Secure = styled.div`
${tw`
flex
justify-center
mt-4
text-base
text-primaryFocus
`}
`;

export default function Cart() {
    const totalPrice = useAppSelector(getTotalPrice);
    return (
        <Container>
            <CartList>
                <ListTitle>Your Cart</ListTitle>
                <ListMenu>
                    <Shopping>
                        <img 
                        src="./assets/vector/arrow-left.svg"
                        width={5}
                        className="mr-3" 
                        />
                        <ShoppingButton>Continue shopping</ShoppingButton>
                    </Shopping>
                    <Remove>
                        <RemoveTitle>Remove all</RemoveTitle>
                        <img 
                        src="./assets/vector/remove.svg"
                        className="ml-2"
                        width={8}
                         />
                    </Remove>
                </ListMenu>
                <CartMenu>
                    <CartCategory>
                        <CartImg src="./assets/images/tomato.png" />
                        <Product>
                            <Category>Fruits & Vegetables</Category>
                            <Title>Super Juicy Tomatoes 400g</Title>
                        </Product>
                    </CartCategory>
                    <CartAdd></CartAdd>
                    <PriceAdd>
                        <CartPrice>$14.99</CartPrice>
                        <PriceImg src="./assets/vector/remove.svg"
                        width={7}
                        />
                    </PriceAdd>
                </CartMenu>
                <CartMenu>
                    <CartCategory>
                        <CartImg src="./assets/images/tomato.png" />
                        <Product>
                            <Category>Fruits & Vegetables</Category>
                            <Title>Super Juicy Tomatoes 400g</Title>
                        </Product>
                    </CartCategory>
                    <CartAdd></CartAdd>
                    <PriceAdd>
                        <CartPrice>$14.99</CartPrice>
                        <PriceImg src="./assets/vector/remove.svg"
                        width={7}
                        />
                    </PriceAdd>
                </CartMenu>
                <CartMenu>
                    <CartCategory>
                        <CartImg src="./assets/images/tomato.png" />
                        <Product>
                            <Category>Fruits & Vegetables</Category>
                            <Title>Super Juicy Tomatoes 400g</Title>
                        </Product>
                    </CartCategory>
                    <CartAdd></CartAdd>
                    <PriceAdd>
                        <CartPrice>$14.99</CartPrice>
                        <PriceImg src="./assets/vector/remove.svg"
                        width={7}
                        />
                    </PriceAdd>
                </CartMenu>
                <CartMenu>
                    <CartCategory>
                        <CartImg src="./assets/images/tomato.png" />
                        <Product>
                            <Category>Fruits & Vegetables</Category>
                            <Title>Super Juicy Tomatoes 400g</Title>
                        </Product>
                    </CartCategory>
                    <CartAdd></CartAdd>
                    <PriceAdd>
                        <CartPrice>$14.99</CartPrice>
                        <PriceImg src="./assets/vector/remove.svg"
                        width={7}
                        />
                    </PriceAdd>
                </CartMenu>
                <CartMenu>
                    <CartCategory>
                        <CartImg src="./assets/images/tomato.png" />
                        <Product>
                            <Category>Fruits & Vegetables</Category>
                            <Title>Super Juicy Tomatoes 400g</Title>
                        </Product>
                    </CartCategory>
                    <CartAdd></CartAdd>
                    <PriceAdd>
                        <CartPrice>$14.99</CartPrice>
                        <PriceImg src="./assets/vector/remove.svg"
                        width={7}
                        />
                    </PriceAdd>
                </CartMenu>
            </CartList>
            <CheckoutContent>
            <Separ />
                <Checkout>
                    <CheackoutContainer>
                        <Total>
                            <span>Total products:</span>
                            <span className="w-1/6 text-accent">${totalPrice}</span>
                        </Total>
                        <Promocode>
                            <span>Promo code</span>
                        </Promocode>
                        <Delivery>
                            <span>Delivery</span>
                            <span className="w-1/6 text-accent">Free</span>
                        </Delivery>
                        <Estimated>
                            <span>Estimated Total:</span>
                            <span className="w-1/6">$14.99</span>
                        </Estimated>
                    </CheackoutContainer>
                    <CheakCont>
                        <CheckoutButton>Checkout</CheckoutButton>
                    </CheakCont>
                </Checkout>
                <Secure>
                    <img
                    src="./assets/vector/secure.svg"
                    className="mr-1"
                     />
                    <span>Secure checkout</span>
                </Secure>
            </CheckoutContent>
        </Container>
    );
}