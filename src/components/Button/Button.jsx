import "./index.css";

const Button = ({
  buttonTextContent = "",
  type = "button",
  disabled,
  onClick = () => {
    console.log("clicked");
  },
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className="Button"
    >
      {buttonTextContent}
    </button>
  );
};

export default Button;
