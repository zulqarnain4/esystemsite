import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <Container>
      <StyledCopyright className="text-center">
        &copy; 2021 Mannir Esystems
      </StyledCopyright>
    </Container>
  );
};

export default Copyright;

const StyledCopyright = styled.p`
  padding: 1.5em 0;
`;
