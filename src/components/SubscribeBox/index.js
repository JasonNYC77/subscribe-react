import React, { useState } from "react";
import "./SubscribeBox.css";

function SubscribeBox(props) {
  const [state, setState] = useState({
    doNotReceive: false,
    email: "",
  });

  const changeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const changeReceive = (e) => {
    setState({ ...state, doNotReceive: e.target.checked });
  };
  return (
    <div className="subscribe-box">
      <div className="field">
        <input
          placeholder="Enter Email"
          type="text"
          onChange={changeEmail}
          value={state.email}
        />
      </div>
      <div className="field">
        <button
          onClick={() => {
            props.onSubscribe(state);
          }}
        >
          Subscribe
        </button>
      </div>
      <div className="field txtCenter">
        <input
          type="checkbox"
          id="receive-information"
          name="receive-information"
          onChange={changeReceive}
          value={state.doNotReceive}
        />
        <label className="txtSmall leftMargin" htmlFor="receive-information">
          I do not want to receive information about future newsletters.
        </label>
      </div>
    </div>
  );
}

export default SubscribeBox;
