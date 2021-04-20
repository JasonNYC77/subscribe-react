import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="checkbox" onClick={props.onChange}>
      {props.value ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 24"
          fill="#589ff5"
        >
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Checkbox;
