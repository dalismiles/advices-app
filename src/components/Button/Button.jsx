import "./index.css";

const Button = ({
  buttonTextContent = "",
  type = "button",
  onClick = () => {
    console.log("clicked");
  },
}) => {
  return (
    <button onClick={onClick} type={type} className="Button">
      {buttonTextContent}
    </button>
  );
};

export default Button;
