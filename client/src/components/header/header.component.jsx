import React from "react";

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";



import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.style';
export const Header = ({ currentUser, hidden ,signOutStart }) => {

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo style={{height:'100%', width:'100%'}}/>
      </LogoContainer>
      <OptionsContainer>
      {currentUser !== null ? (
          <OptionDiv>{currentUser.displayName}</OptionDiv>
        ) : (
          <div />
        )}
          
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/chat" target="_blank">Chat</OptionLink>

        {currentUser !== null ? (
          <OptionDiv id="signout-btn" onClick={signOutStart}>SignOut</OptionDiv>
        ) : (
          <OptionLink to="/signin">SignIn</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
