import React from 'react'

import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.compoent';
import  { Redirect } from 'react-router-dom';


import { selectCurrentUser } from "../../redux/user/user.selectors";
import './signIn.style.scss';

export default function() {
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser
    })
  );
  if(currentUser !== null)
    return <Redirect to="/" />
    
  return (
    <div className="signin-signup">
      <SignIn/>
      <SignUp/>
    </div>
  )
}
