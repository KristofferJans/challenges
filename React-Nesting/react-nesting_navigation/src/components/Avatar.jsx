import Img from "./Img.jsx";
import avatar from "../assets/avatar.jpg";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Img src={avatar} alt="avatar"></Img>
    </button>
  );
}
