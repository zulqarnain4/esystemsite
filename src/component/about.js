import React from "react";
import AOS from "aos";
import styled from "@emotion/styled";
import man from "./man.jpg";
import { Container } from "react-bootstrap";

AOS.init();

const About = () => {
  return (
    <Container id="about">
      <AboutContainer>
        <h2>ABOUT US</h2>
        <FlexWrapper>
          <div
            className="imgDiv"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={man} alt="a man using his laptop" />
          </div>
          <div
            className="abtDiv"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p>
              "We are a community of developers who have come together to
              provide free mentorship, guidance and learning resources for new
              developers. We know how hard it is changing careers and the
              difficulties involved trying to navigate the tech ecosystem. There
              are a variety of things to learn all at once and we know how
              overwhelming it can get for a complete beginner.
              <br />
              <br />
              Mannir Esystems simply means 'The tech community'. Developers in
              the community are volunteers.
              <br />
              <br />
              Are you just starting your tech journey, feeling lost or you're
              still trying to figure out what the buzz about tech is? You are
              not alone. Register now to get the necessary help you need and
              connect with others in the tech space
            </p>
          </div>
        </FlexWrapper>
      </AboutContainer>
    </Container>
  );
};

export default About;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .imgDiv {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .abtDiv {
    width: 400px;
    /* line-height: 1.6; */

    p::first-letter {
      font-size: 300%;
      color: #5d86fe;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .abtDiv {
      width: 100%;
      padding: 2em 0;
    }
  }
`;

export const AboutContainer = styled.div`
  padding: 10em 0;

  h2 {
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 2em;
  }

  @media (max-width: 700px) {
    padding: 3em 0;
  }
`;
