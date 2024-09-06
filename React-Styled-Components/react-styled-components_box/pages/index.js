import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <StyledBoxes>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithClassName />
      <BoxWithStyledComponents $isBlack />
    </StyledBoxes>
  );
}

const StyledBoxes = styled.div`
  display: flex;
`;
