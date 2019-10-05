import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div`
  min-width: ${props => (props.size === "small" ? "2rem" : "3rem")};
  max-width: ${props => (props.size === "small" ? "2rem" : "3rem")};
  min-height: ${props => (props.size === "small" ? "2rem" : "3rem")};
  max-height: ${props => (props.size === "small" ? "2rem" : "3rem")};

  img {
    border-radius: 50%;
  }
`;

const Avatar = ({ src, username, size }) => {
  return (
    <StyledAvatar size={size}>
      <img src={src} alt={`${username}'s avatar`} />
    </StyledAvatar>
  );
};

export default Avatar;
