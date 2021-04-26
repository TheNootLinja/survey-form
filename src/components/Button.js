import '../styles/Button.css';

function Button({ btext, clickHandler }) {
  return <button onClick={clickHandler}>{btext}</button>;
}

export default Button;
