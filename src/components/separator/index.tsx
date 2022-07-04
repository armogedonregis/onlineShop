import styled from "styled-components";
import tw from "twin.macro";

const SeparateLine = styled.div`
  height: 1px;
  ${tw`
  bg-black
  opacity-50
  blur-sm
  lg:block
  w-full
  `}
`;

export default function Separator({ className }: { className?: string }) {
  return <SeparateLine className={className} />;
}
