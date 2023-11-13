
import { useDispatch, useSelector } from "react-redux";
import { editNameApi } from "../../api/apiReq";
import { useEffect, useState } from "react";



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




 


  return (
    <div className="profileContainer">
          <h1 className="profileTitle">
            Welcome back <br/> {user.firstName} {user.lastName} !
          </h1>

          <div className="editNameButton">

          <button onClick={handleButtonClick} className="edit-button">Edit Name</button>
          {showForm && (
        <form className="form2" onSubmit={nameEdit}>
            <div className="formBtns">
          <label>
            Entrez le nouveau nom d'utilisateur
            <input type="text" name="username" id="username" value={newUsername.username}
                onChange={(event) => setNewUsername({ username: event.target.value })}
              />
          </label>
          
          <button type="submit" className="smtBtn">Mettre à jour </button>
          <button className="smtBtn" onClick={() => 
            {setShowForm(false); 
            const btnEdit2 = document.querySelector('.edit-button');
            btnEdit2.style.display = "flex";}
            }>Annuler</button>
          </div>
        </form>
      )}
          </div>

    </div>
  );

};

export default Profile;