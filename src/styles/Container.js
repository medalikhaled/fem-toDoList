import styled from "styled-components";
export const AppContainer = styled.div`
  min-height: 100vh;
  height: 100%; //Change this to match your height on scroll
  background-color: ${({ colors }) => colors.colors.mainBack};
  color: ${({ colors }) => colors.colors.fontColor};
`;

export const Mode = styled.img`
  content: url(${({ theme }) => theme.icon});
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }
`;

export const Header = styled.div`
  background: url("/assets/bg-mobile-dark.jpg");
  background-position: center;
  background-size: cover;
  height: 30vh;

  div {
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50%;

    h1 {
      font-size: 2rem;
      letter-spacing: 0.5rem;
    }
  }

  @media (min-width: 687px) {
    background: url("/assets/bg-desktop-" + ${({ colors }) => colors.modeName} + ".jpg");
  }
`;

export const ListContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  place-content: center;
`;

export const Counter = styled.div``;
export const Footer = styled.div`
  margin-top: 2rem;
`;
