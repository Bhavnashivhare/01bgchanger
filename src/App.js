import 'bulma/css/bulma.min.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="hero is-fullheight"
      style={{ backgroundColor: color }}
    >
      <div className="is-fixed-bottom has-text-centered px-2 mb-5">
        <div className="box has-shadow p-3 is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
       
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
       
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
       
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
      
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="button is-rounded has-text-white has-shadow mx-2"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;