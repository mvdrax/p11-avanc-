
import { useDispatch, useSelector } from "react-redux";
import { editNameApi } from "../../api/apiReq";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import AccountInfos from "../../components/accountInfos";


import React from "react";

import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const [newUsername, setNewUsername] = useState('');
    const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();




 

  useEffect(() => {
    setNewUsername({ username: user.userName });
  }, [user]);


  const nameEdit = async (e) => {
    e.preventDefault();

    const response = await editNameApi(user.token ,newUsername)
    if (response.status === 200) {
        
        
        dispatch({
            type: "user/userEditandDisplay",
            payload: { data: response.body },
          });
          setShowForm(false);
    }
  }



const handleButtonClick = () => {
    setShowForm(true);
    const btnEdit = document.querySelector('.edit-button');
    btnEdit.style.display = "none";
}



const RedirectOnRefresh = () => {
    const navigate = useNavigate();
    const [shouldRedirect] = useState(false);
  
    useEffect(() => {
      const handleUnload = () => {
        localStorage.setItem(shouldRedirect,'true');
      };
  
      window.addEventListener('beforeunload', handleUnload);
      const storedShouldRedirect = localStorage.getItem(shouldRedirect);
      if (storedShouldRedirect) {
        navigate('/signin');
        localStorage.removeItem(shouldRedirect);
      }
  
      return () => {
        window.removeEventListener('beforeunload', handleUnload);
      };
    }, [navigate,shouldRedirect]);
}
  


RedirectOnRefresh ();











 


  return (
    <div className="profileContainer">
        <Header/>
          <h1 className="profileTitle">
            Welcome back <br/> {user.firstName} {user.lastName} !
          </h1>

          <div className="editNameButton">

          <button onClick={handleButtonClick} className="edit-button">Edit Name</button>
          {showForm && (
        <form className="form2" onSubmit={nameEdit}>
            <div className="formBtns">
          <label>
            <div className="disabledNamesInput">
              <label htmlFor="firstName">First Name </label>
              <input type="text" name="firstname" id="firstname" value={user.firstName} disabled />
            </div>

            <div className="disabledNamesInput">
              <label htmlFor="lastName">Last Name </label>
              <input type="text" name="lastname" id="lastname" value={user.lastName} disabled />
            </div>
            Please type your new username.
            <input type="text" name="username" id="username" value={newUsername.username}
                onChange={(event) => setNewUsername({ username: event.target.value })}
              />
          </label>
          <div className="formSmtBtns"> 
          <button type="submit" className="smtBtn">Update </button>
          <button className="smtBtn" onClick={() => 
            {setShowForm(false); 
            const btnEdit2 = document.querySelector('.edit-button');
            btnEdit2.style.display = "flex";}
            }>Cancel</button>
          </div> 
          </div>
        </form>
      )}
          </div>
          <AccountInfos/>

    </div>
  );

};

export default Profile;