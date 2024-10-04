import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../actions/user.action";
import PropTypes from "prop-types";
import { useState } from "react";
import "./EditName.scss";

function EditName({ toggleEditing }) {
  const [userName, setUserName] = useState("");

  const dataUser = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();

  const handleUpdateData = (e) => {
    e.preventDefault();
    toggleEditing(); // Gestion du formulaire
    dispatch(updateUserData(userName));
  };

  return (
    <>
      <div>
        <form className="formUpdate" onSubmit={handleUpdateData}>
          <label htmlFor="username">
            User Name
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              autoComplete="off"
            />
          </label>

          <label htmlFor="firstname">
            First Name
            <input
              type="text"
              id="firstname"
              value={dataUser.firstName}
              disabled
            />
          </label>

          <label htmlFor="lastname">
            Last Name
            <input
              type="text"
              id="lastname"
              value={dataUser.lastName}
              disabled
            />
          </label>

          <div className="formUpdate-button">
            <button type="submit">Save</button>
            <button type="button" onClick={toggleEditing}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditName.propTypes = {
  toggleEditing: PropTypes.func.isRequired,
};

export default EditName;
