import Users from "./Users";
import Succes from "./Success";

import { useEffect, useState } from "react";

import "./listOfUsers.scss";

function ListOfUsers() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isSucces, setIsSucces] = useState(false);


  //Getting data about users
  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((obj) => obj.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error receiving data");
      });
  }, []);

  //Getting data about input

  const onChangeSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  //Invites or delete user from list

  const onClickIsInvites = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => {
        return prev.filter((_id) => _id !== id);
      });
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickisSucces = () => {
    setIsSucces(true);
  };

  const onClickNotSucces = () => {
    setIsSucces(false)
    setInvites([])
    setSearchVal('')
  }

  return (
    <>
      <div className="wrapper">
        {isSucces ? (
          <Succes
            onClickisSucces={onClickisSucces}
            setInvites={setInvites}
            invites={invites}
            isSucces={isSucces}
            onClickNotSucces={onClickNotSucces}
          />
        ) : (
          <div className="users_wrapper">
            <div className="users_wrapper_input">
              <input
                onChange={onChangeSearchVal}
                type="text"
                name="name"
                id="name"
                placeholder="find user"
              />
            </div>
            <div className="users_wrapper_list">
              <Users
                onClickIsInvites={onClickIsInvites}
                users={users}
                searchVal={searchVal}
                invites={invites}
              />
            </div>
            <div
              className={`${
                invites.length > 0
                  ? "users__wrapper_button"
                  : "users__wrapper_button users__wrapper_button_muted"
              }`}
            >
              <button invites={invites} onClick={invites.length > 0 ? onClickisSucces : undefined}>send invite</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ListOfUsers;
