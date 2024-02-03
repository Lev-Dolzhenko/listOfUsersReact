import "./succes.scss";

function Succes({ onClickisSucces, invites }) {
  return (
    <div className='succes'>
      <h1 className="succes_title1">You {invites.length} Invited sended!</h1>
      <button onClick={onClickisSucces}>Close</button>
    </div>
  );
}

export default Succes;
