import styled from '@emotion/styled';

export const Label = styled.div`
  color: rgb(255, 255, 255);
  background-color: ${({ color }) => color || 'rgb(1, 37, 45)'};
  width: ${({ width }) => width ? `${width - 16}px` : 'auto'};
  border: 1px solid rgb(255, 255, 255);
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: default;
`;