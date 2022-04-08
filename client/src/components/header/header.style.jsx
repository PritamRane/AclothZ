import style, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const optionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = style.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
padding: 20px 40px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`
export const SearchField = style.input`
  
`

export const LogoContainer = style(Link)`
  height: 250%;
`
export const OptionsContainer = style.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = style(Link)`
  ${optionContainerStyle}
  padding: 10px 15px;
			cursor: pointer;
			backdrop-filter: blur(4px) saturate(89%);
			-webkit-backdrop-filter: blur(4px) saturate(89%);
			background-color: rgba(49, 73, 73, 0);
			border-radius: 12px;
			border: 1px solid rgba(209, 213, 219, 0.3);

			margin: 10px;
			-webkit-box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
			-moz-box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
			box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
`

export const OptionDiv = style.div`
  ${optionContainerStyle}
  padding: 10px 15px;
			cursor: pointer;
			backdrop-filter: blur(4px) saturate(89%);
			-webkit-backdrop-filter: blur(4px) saturate(89%);
			background-color: rgba(49, 73, 73, 0);
			border-radius: 12px;
			border: 1px solid rgba(209, 213, 219, 0.3);

			margin: 10px;
			-webkit-box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
			-moz-box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
			box-shadow: 0px 0px 42px -14px rgba(0, 0, 0, 0.75);
`
