import "./Button.css";

const Button = ({ text, link, id }) => {
  return (
    <a href={ link }  id={ id }>
      <button>{ text }</button>
    </a>
  );
};

export default Button;
