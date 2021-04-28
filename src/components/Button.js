import '../styles/Button.css';

function Button({ btext, clickHandler }) {
  return (
    <button onClick={clickHandler} className="box-shadow">
      {btext}
    </button>
  );
}

export default Button;
