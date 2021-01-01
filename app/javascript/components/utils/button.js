import styled from '@emotion/styled';

export const TextButton = styled.button`
  ${({ color }) => ({ color })}
  appearance: none;
  border: none;
  background: none;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    ${({ hoverColor, color }) => ({ color: hoverColor || color })}
  }
  &:focus {
    outline: none;
  }
`;