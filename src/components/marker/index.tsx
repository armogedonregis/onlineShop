import styled from "styled-components";
import tw from "twin.macro";

interface MarkProps {
  text: string;
  green?: boolean;
}

const MarkerContainer = styled.div<{ green?: boolean }>`
  clip-path: polygon(0 23%, 100% 23%, 100% 79%, 21% 82%, 0 98%, 0 75%, 0% 75%);
  font-size: 8px;
  width: 28px;
  height: 25px;
  ${tw`
  flex
  items-center
  rounded-xl
  uppercase
  absolute
  bottom-5
  right-0
  font-bold
  justify-center
  bg-tertiary
  `}

  ${({ green }) => green && tw`bg-accent`}
`;

const Text = styled.p`
  ${tw`text-white`}
`;

export default function Marker({ text, green = false }: MarkProps) {
  return (
    <MarkerContainer green={green}>
      <Text>{text}</Text>
    </MarkerContainer>
  );
}
