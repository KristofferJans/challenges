import "./Tag.css";

export default function Tag({ tag }) {
  let userclassName = "tag";
  if (tag === "admin") {
    userclassName = userclassName + " tag--highlight";
  }

  return <li className={userclassName}>{tag}</li>;
}
