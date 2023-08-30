import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;
  margin-top: 32px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;

  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-left: 8px;
    font-weight: bold;
  }

  img {
    transform: ${(p) =>
      p.orderby === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
    margin-left: 8px;
    transition: transform 0.2s ease-in;
  }
`;

export const Card = styled.div`
  & + & {
    margin-top: 16px;
  }

  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.light};
        padding: 4px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  .details {
    margin-left: 24px;
  }

  strong {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
    margin-bottom: 9px;
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
