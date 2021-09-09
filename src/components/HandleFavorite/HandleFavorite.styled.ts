import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";

export const AbsoluteElement = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  margin: 10px;
`;

export const Button = styled.button<{
  $isFavorite: boolean;
  defaultBackgroundColor: string;
}>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 14px;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    transform 100ms cubic-bezier(0.64, 0.04, 0.35, 1);

  ${({ theme: { breakpoints }, $isFavorite, defaultBackgroundColor }) => `
    background-color: ${$isFavorite ? "lightpink" : "lightgrey"};
    @media (min-width: ${breakpoints.mobile}px) {
      background-color: ${$isFavorite ? "lightpink" : defaultBackgroundColor};
    }
  `}

  &:active {
    transform: scale(0.98);
  }
`;

export const Icon = styled(FaBookmark)<{ $isFavorite: boolean }>`
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: ${({ theme: { colors }, $isFavorite }) =>
    $isFavorite ? "white" : colors.grey600};
`;
