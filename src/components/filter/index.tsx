import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Categories = styled.div`
${tw`
mt-10
ml-2
lg:ml-8
lg:w-10/12
w-full
`}
`;

const Category = styled.div`
${tw`    
sm:flex
mx-3
mb-1
`}
`;


const Title = styled.button`
${tw`
lg:relative
mb-2
font-bold
flex
`}
`;


const Line = styled.label`
${tw`   
mb-2
`}
`;

const Circul = styled.input`
${tw`   
mr-3
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

const Text = styled.span`
${tw`    
`}
`;


export default function Filter({
    titleText,
    textOne,
    buttonOne,
    textTwo,
    textThree,
    textFour,
    textFive
})

    {
    const [scroll, setScroll] = useState<boolean>(true)
    const openClose = () => setScroll(!scroll);
    const [cheak, setCheak] = useState<string>('');
    const hundel = (e: any) => {
            setCheak(e.target.value);
    }
    
    return (
        <Categories>
            <Title
            onClick={openClose}
            >
                {titleText} 
                <img 
                className="lg:absolute lg:left-60 lg:bottom-2 lg:visible invisible"
                src="./assets/vector/shevron.svg" 
                />
                </Title>
                {scroll &&
            <><Category>
                    <Line>
                    <Circul checked={cheak === textOne} onClick={hundel} onChange={buttonOne} value={textOne} type="radio" >
                    </Circul>
                    <Text>{textOne}</Text>
                    </Line>
                </Category><Category>
                <Line>
                    <Circul checked={cheak === textTwo} onClick={hundel} onChange={buttonOne} value={textTwo} type="radio" >
                    </Circul>
                    <Text>{textTwo}</Text>
                    </Line>
                    </Category><Category>
                    <Line>
                    <Circul checked={cheak === textThree} onClick={hundel} onChange={buttonOne} value={textThree} type="radio" >
                    </Circul>
                    <Text>{textThree}</Text>
                    </Line>
                    </Category><Category>
                    <Line>
                    <Circul checked={cheak === textFour} onClick={hundel} onChange={buttonOne} value={textFour} type="radio" >
                    </Circul>
                    <Text>{textFour}</Text>
                    </Line>
                    </Category><Category>
                    <Line>
                    <Circul checked={cheak === textFive} onClick={hundel} onChange={buttonOne} value={textFive} type="radio" >
                    </Circul>
                    <Text>{textFive}</Text>
                    </Line>
                    </Category></>       
    }
            <Separ />
        </Categories>
    );
  }
  