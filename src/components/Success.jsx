import "./succes.scss";
import './animation.scss'

function Succes({ invites, onClickNotSucces, isSucces }) {
  return (
    <div className={`succes ${isSucces ? "show" : "show"} `}>
      <h1 className="succes_title1">You {invites.length} Invited sended!</h1>
      <button onClick={onClickNotSucces}>Close</button>
    </div>
  );
}

export default Succes;
