import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  document.users = users;
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        Here is your data, displayed:
        {users.map((e, i) => {
          return <Card key={i} {...e} />;
        })}
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const Card = ({ name, location, car }) => {
  return (
    <div>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{location}</p>
      <p>{car}</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
