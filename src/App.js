import React, { useState } from "react";
import NewsletterItem from "./components/NewsletterItem";
import SubscribeBox from "./components/SubscribeBox";
import { subscribe } from "./services/subscribe";
import "./App.css";

function App() {
  const [newsletters, setNewsletters] = useState(require("./data"));

  const [errors, setErrors] = useState("");
  const submitSubscribe = (subscriptionDetails) => {
    setErrors("");

    subscribe(subscriptionDetails, newsletters)
      .then(() => {})
      .catch((ex) => {
        setErrors(ex);
      });
  };
  const setChecked = (item) => {
    item.checked = !item.checked;
    console.log(item);
    setNewsletters([...newsletters]);
  };
  return (
    <div className="container">
      <div className="headerNewsLetter">
      <h2>Newsletters</h2>
      <p>Select all the newsletters you'd like to receive.</p>
      </div>
      {newsletters.map((item) => (
        <NewsletterItem
          onChange={() => {
            setChecked(item);
          }}
          key={item.id}
          data={item}
        />
      ))}

      <SubscribeBox onSubscribe={submitSubscribe} />
      {errors.length > 0 && (
        <div className="errors">An error occurred during processing {errors}</div>
      )}
    </div>
  );
}

export default App;
