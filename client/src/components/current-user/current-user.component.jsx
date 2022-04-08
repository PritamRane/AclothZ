import React from "react";

import './current-user.style.scss';

const User = ({currentUser}) => (


    <div className='User'>
        {currentUser ? (
        <div className='User-Name' >
            {currentUser.displayName}
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
) 

export default User;