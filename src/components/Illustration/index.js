import React from "react";
import styled from "styled-components";

const Block = styled.div`
  position: absolute;
  top: ${props => (props.back ? "198px" : "285px")};
  left: ${props => (props.back ? "272px" : "217px")};
  width: 336px;
  height: 174px;
  border-radius: 30px;
  background: ${props => (props.back ? "#E9EAED" : "white")};
  box-shadow: ${props =>
    props.back ? "" : "0px 5px 80px rgba(198, 207, 216, 0.9);"};
  z-index: ${props => (props.back ? "" : "20")};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 38px;
  top: ${props => (props.long ? "101px" : "53px")};
  width: ${props => (props.long ? "226px" : "113px")};
  height: 13px;
  background: ${props => (props.long ? "#E4E7ED" : "#C7D1D9")};
  border-radius: 10px;
`;

const Circle = styled.svg`
  position: absolute;
  top: ${props => (props.one ? "148px" : "113px")};
  left: ${props => (props.one ? "192px" : "500px")};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const CircleFull = styled.svg`
  position: absolute;
  top: ${props => (props.one ? "264px" : "387px")};
  left: ${props => (props.one ? "133px" : "608px")};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const Plus = styled.svg`
  position: absolute;
  top: ${props => (props.one ? "382px" : props.two ? "132px" : "226px")};
  left: ${props => (props.one ? "156px" : props.two ? "350px" : "652px")};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const Text = styled.p`
  position: absolute;
  top: 543px;
  left: 144px;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
`;

const Illustration = () => {
  return (
    <div>
      <Block>
        <Placeholder />
        <Placeholder long />
      </Block>
      <Block back>
        <Placeholder />
      </Block>

      <Circle
        one
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 21.6774c-5.3468 0-9.6774-4.3306-9.6774-9.6774 0-5.3468 4.3306-9.6774 9.6774-9.6774 5.3468 0 9.6774 4.3306 9.6774 9.6774 0 5.3468-4.3306 9.6774-9.6774 9.6774z"
          fill="#BDC2C6"
        />
      </Circle>
      <Circle
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 21.6774c-5.3468 0-9.6774-4.3306-9.6774-9.6774 0-5.3468 4.3306-9.6774 9.6774-9.6774 5.3468 0 9.6774 4.3306 9.6774 9.6774 0 5.3468-4.3306 9.6774-9.6774 9.6774z"
          fill="#BDC2C6"
        />
      </Circle>

      <CircleFull
        one
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.4758 0 0 4.4758 0 10s4.4758 10 10 10 10-4.4758 10-10S15.5242 0 10 0z"
          fill="#B4C1CB"
        />
      </CircleFull>
      <CircleFull
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.4758 0 0 4.4758 0 10s4.4758 10 10 10 10-4.4758 10-10S15.5242 0 10 0z"
          fill="#B4C1CB"
        />
      </CircleFull>

      <Plus
        one
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 7.5H10.5V.75A.7498.7498 0 009.75 0h-1.5a.7498.7498 0 00-.75.75V7.5H.75a.7498.7498 0 00-.75.75v1.5c0 .4144.3356.75.75.75H7.5v6.75c0 .4144.3356.75.75.75h1.5c.4144 0 .75-.3356.75-.75V10.5h6.75c.4144 0 .75-.3356.75-.75v-1.5a.7498.7498 0 00-.75-.75z"
          fill="#D3DADC"
        />
      </Plus>
      <Plus
        two
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 7.5H10.5V.75A.7498.7498 0 009.75 0h-1.5a.7498.7498 0 00-.75.75V7.5H.75a.7498.7498 0 00-.75.75v1.5c0 .4144.3356.75.75.75H7.5v6.75c0 .4144.3356.75.75.75h1.5c.4144 0 .75-.3356.75-.75V10.5h6.75c.4144 0 .75-.3356.75-.75v-1.5a.7498.7498 0 00-.75-.75z"
          fill="#D3DADC"
        />
      </Plus>
      <Plus
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 7.5H10.5V.75A.7498.7498 0 009.75 0h-1.5a.7498.7498 0 00-.75.75V7.5H.75a.7498.7498 0 00-.75.75v1.5c0 .4144.3356.75.75.75H7.5v6.75c0 .4144.3356.75.75.75h1.5c.4144 0 .75-.3356.75-.75V10.5h6.75c.4144 0 .75-.3356.75-.75v-1.5a.7498.7498 0 00-.75-.75z"
          fill="#D3DADC"
        />
      </Plus>
      <Text>It’s nice to chat with someone</Text>
    </div>
  );
};

export default Illustration;
