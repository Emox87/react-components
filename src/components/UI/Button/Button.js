const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      style={{
        background: props.background,
        color: props.color,
        padding: ".25rem",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
