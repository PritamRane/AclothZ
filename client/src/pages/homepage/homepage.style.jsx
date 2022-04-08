import style from "styled-components";

export const HomePage = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    padding: 0 5% 0 5%;
  }
`;

export const H1 = style.h1`
  text-align: center;
`;
