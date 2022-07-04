import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "../../app/hooks";
import { getTotalPrice } from "../../app/slice/cartSlice";
import CardCart from "../cardCart";

const Containter = styled.div`
  ${tw`
p-5 
absolute 
top-16
right-[34rem]
`}
`;

const Wrap = styled.div`
  ${tw`
flex 
h-64 
justify-center
`}
`;

const Fixed = styled.div`
  ${tw`
relative
`}
`;

const Border = styled.div`
  ${tw`
absolute 
w-full  
rounded-b 
border-t-0 
z-10
`}
`;

const Shadow = styled.div`
  ${tw`
shadow-xl 
w-64
overflow-auto
h-60
bg-white
`}
`;

const Center = styled.div`
  ${tw`
p-4 
justify-center 
flex
`}
`;

const Checkout = styled.button`
  ${tw`
text-base 
hover:scale-110 
focus:outline-none 
flex 
justify-center 
px-4 
py-2 
rounded 
font-bold 
cursor-pointer 
hover:bg-green-700 
hover:text-green-100 
bg-green-100 
text-green-700 
border 
duration-200 
ease-in-out 
border-green-600 
transition
`}
`;

const Hight = styled.div`
  ${tw`
h-32
`}
`;

export default function CartAdd() {
    const cart = useAppSelector((state) => state.cart.cartItems);
    const totalPrice = useAppSelector(getTotalPrice);
  return (
    <Containter>
      <Wrap>
        <Fixed>
          <Border>
            <Shadow>
              {cart.length
                ? cart.map((cartItem, id) => {
                    return <CardCart key={id} {...cartItem} />;
                  })
                : null}
              <Center>
                <Checkout>Checkout ${totalPrice}</Checkout>
              </Center>
            </Shadow>
          </Border>
        </Fixed>
      </Wrap>
      <Hight></Hight>
    </Containter>
  );
}
