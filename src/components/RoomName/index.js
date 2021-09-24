import "./style.css";
import Fleche from "../../assets/precedentfleche.svg";
import { useHistory } from "react-router-dom";

function RoomName({ online }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="room-name__container">
      <img alt="back" className="room-name__img" onClick={goBack} src={Fleche} />
      <div className="room-name__text">
        <div className="room-name">Classroom</div>
        <div className="room-name__number_online">En ligne - {online}</div>
      </div>
    </div>
  );
}

export default RoomName;
