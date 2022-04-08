import style, { css } from "styled-components";

const GoogleButtonStyle = css`
background-color: #000000;

  &:hover {
    border: none;
  }
`;

const InvertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const ButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyle = ({ googleSignInButton, inverted }) => {
  if (googleSignInButton) {
    return GoogleButtonStyle;
  }

  if (inverted) {
    return InvertedStyle;
  }

  return ButtonStyle;
};

export const CustomeButtonContainer = style.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0px;
line-height: 50px;

font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Poppins';
font-weight: bolder;
border: none;
cursor: pointer;
border-radius: 10px 10px 10px 10px;
-moz-border-radius: 10px 10px 10px 10px;
-webkit-border-radius: 10px 10px 10px 10px;
border: 0px solid #000000;

  ${getButtonStyle}
`;
