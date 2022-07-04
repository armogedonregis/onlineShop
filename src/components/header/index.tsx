import styled from "styled-components";
import tw from "twin.macro";

const Heading = styled.h1`
  ${tw`
text-4xl
uppercase
text-center
font-bold
`}
`;

const GreenText = styled.span<{ greenFirst?: boolean; greenSecond?: boolean }>`
  ${({ greenFirst, greenSecond }) =>
    (greenFirst || greenSecond) && tw`text-accent`}
`;

export default function Header({
  firstText,
  secondText,
  greenFirst = false,
  greenSecond = false,
}) {
  return (
    <Heading>
      <GreenText greenFirst={greenFirst}>{firstText} </GreenText>
      <GreenText greenSecond={greenSecond}>{secondText}</GreenText>
    </Heading>
  );
}
