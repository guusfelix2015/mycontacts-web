import styled, { css } from "styled-components";

export const StyledButton =  styled.button`
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  font-weight: bold;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 16px;
  border: none;
  transition: background 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }

  ${({ theme, $danger }) =>
    $danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
