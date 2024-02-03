import plusIcon from "./../content/user/plus.svg";
import minusIcon from "./../content/user/minus.svg";

import "./user.scss";

function User({
  id,
  avatar,
  first_name,
  last_name,
  email,
  onClickIsInvites,
  isInvited,
}) {
  return (
    <>
      <div className="user">
        <div className="user_avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="user_info">
          <div className="user_name">
            {first_name} {last_name}
          </div>
          <div className="user_email">{email}</div>
        </div>
        <div className="user_add">
          <button className="user_add_button" onClick={() => onClickIsInvites(id)}>
            <img src={isInvited ? minusIcon : plusIcon} alt="invite iser" />
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
