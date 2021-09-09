import styled from "styled-components";

export const BannerImage = styled.img`
  height: 380px;
  object-fit: cover;
  object-position: 50% top;
  filter: brightness(80%);
  margin-bottom: 40px;
  transition: filter 0.2s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;
