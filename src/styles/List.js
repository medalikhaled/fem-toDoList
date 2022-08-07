import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 21rem;

  background-color: ${({ chosenTheme }) => chosenTheme.colors.formBack};

  padding: 0.5rem 1rem;
  margin-top: 0.25rem;
  border-radius: 0.25rem;

  label {
    width: 100%;
    text-decoration: ${({ check }) => check.decoration};
    color: ${({ check }) => check.color};
  }

  @media (min-width: 768px) {
    max-width: 31rem;
  }
`;

export const Check = styled.input`
  border-radius: 50%;
`;

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Adder = styled.div`
  input {
    border: none;
    outline: none;
    border-radius: 0.2rem;
    padding: 0.5rem 6rem 0.3rem 1rem;
    color: ${({ chosenTheme }) => chosenTheme.colors.formBack};
    background-color: ${({ chosenTheme }) => chosenTheme.colors.fontColor};
  }
  @media (min-width: 768px) {
    input {
      padding: 0.5rem 16rem 0.5rem 1rem;
    }
  }
`;

export const Button = styled.button`
  display: none;
`;

export const Input = styled.div`
  width: fit-content;
  input {
    width: 100%;
    position: relative;
  }
`;
