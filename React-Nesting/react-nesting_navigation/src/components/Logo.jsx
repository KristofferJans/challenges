import Img from "./Img.jsx";
import logo from "../assets/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Img src={logo} alt="logo"></Img>
    </a>
  );
}
