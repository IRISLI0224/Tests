import { useState } from "react";

export function P1() {
  const [term, setTerm] = useState("(5+8)*3/8+3");
  const [result, setResult] = useState();

  //Regex
  let p = /\(([0-9+\-*/\^ .]+)\)/;
  let mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
  let div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
  let add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
  let sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;

  function _calculate(term) {
    if (isNaN(Number(term))) {
      if (p.test(term)) {
        let newterm = term.replace(p, function (match, subterm) {
          return _calculate(subterm);
        });
        return _calculate(newterm);
      } else if (mul.test(term)) {
        let newterm = term.replace(mul, function (match, x, y) {
          return Number(x) * Number(y);
        });
        return _calculate(newterm);
      } else if (div.test(term)) {
        let newterm = term.replace(div, function (match, x, y) {
          if (y != 0) return Number(x) / Number(y);
          else window.alert("Can't division by 0 !");
        });
        return _calculate(newterm);
      } else if (add.test(term)) {
        let newterm = term.replace(add, function (match, x, y) {
          return Number(x) + Number(y);
        });
        return _calculate(newterm);
      } else if (sub.test(term)) {
        let newterm = term.replace(sub, function (match, x, y) {
          return Number(x) - Number(y);
        });
        return _calculate(newterm);
      } else {
        return term;
      }
    }
    return Number(term);
  }

  const Calculate = () => {
    setResult(_calculate(term));

    console.log("result: " + result);
  };

  const handleDataChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  return (
    <>
      <h1>P1</h1>
      <input
        name="term"
        onChange={handleDataChange}
        placeholder="(5+8)*3/8+3"
      />
      <button onClick={Calculate}>Calculate</button>
      <div>Result: {result}</div>
    </>
  );
}
