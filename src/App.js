import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (ex) {
      setExpression("");
    }
  };
  const handleClick = function (value) {
    const newExpression = expression + value;
    setExpression(newExpression);
  };

  const clear = function () {
    setExpression("");
  };
  const delete1 = function () {
    const newExpression = expression.value;
    newExpression = newExpression.substring(0, newExpression.length - 1);
    setExpression(newExpression);

    const copy = newExpression.filter((el) => newExpression[el !== length]);
    setExpression(copy);
  };

  return (
    <div className="App">
      <div id="result" className="screen">
        {expression}
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
        <button id="el" key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
      <button id="add" key={"+"} onClick={() => handleClick("+")}>
        +
      </button>

      <button id="subtract" key={"-"} onClick={() => handleClick("-")}>
        -
      </button>
      <button id="multiply" key={"*"} onClick={() => handleClick("*")}>
        *
      </button>
      <button id="divide" key={"/"} onClick={() => handleClick("/")}>
        /
      </button>
      <button id="percentile" key={"%"} onClick={() => handleClick("%")}>
        %
      </button>
      <button id="equal" onClick={calculate}>
        =
      </button>
      <button id="clear" onClick={clear}>
        AC
      </button>
      <button id="delete" onClick={delete1}>
        DELETE
      </button>
    </div>
  );
}

export default App;
