import User from "./User";

import "./users.scss";

function Users({ users, searchVal, onClickIsInvites, invites }) {
  return (
    <>
      <div className="users_list">
        {users
          .filter((userInput) => { 
            const full_name = (
              userInput.first_name + userInput.last_name
            ).toLowerCase();
            return (
              full_name.includes(searchVal.toLowerCase()) ||
              userInput.email.toLowerCase().includes(searchVal.toLowerCase())
            );
          })
          .map((user) => (
            <User isInvited={invites.includes(user.id)} key={user.id} {...user} onClickIsInvites={onClickIsInvites}/>
          ))}
      </div>
    </>
  );
}

export default Users;
//
