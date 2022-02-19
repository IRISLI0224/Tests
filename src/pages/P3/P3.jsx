import { useState } from "react";

export function P3() {
  const [term, setTerm] = useState("(5+8)*3/8+3");
  const [result, setResult] = useState();
  const [results, setResults] = useState();

  const SVG_WIDTH = 400;
  const SVG_HEIGHT = 300;

  const x0 = 50;
  const xAxisLength = SVG_WIDTH - x0 * 2;

  const y0 = 50;
  const yAxisLength = SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;

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

  const Display = (result) => {
    const currentResults = result?.split("\n");
    setResults(currentResults);
    console.log(results);
  };

  const Calculate = () => {
    setResult(_calculate(term));
    Display(result);
    console.log("result: " + result);
  };

  const handleDataChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  return (
    <>
      <h1>P3</h1>
      <textarea name="term" onChange={handleDataChange} type="text" />
      <button onClick={Calculate}>Calculate</button>
      <div>Result: {result}</div>
      <br />
      <br />
      <br />
      <div>Graph:</div>
      <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        {/* X axis */}
        <line
          x1={x0}
          y1={xAxisY}
          x2={x0 + xAxisLength}
          y2={xAxisY}
          stroke="grey"
        />
        <text x={x0 + xAxisLength + 5} y={xAxisY + 4}>
          x
        </text>

        {/* Y axis */}
        <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" />
        <text x={x0} y={y0 - 8} textAnchor="middle">
          y
        </text>
        {results?.map((re, index) => {
          return (
            <>
            {index!==results.length-1?
              <line
                x1={x0 + Number(index)*10}
                y1={xAxisY - Number(re)*2}
                x2={x0 + Number(index+1)*10}
                y2={xAxisY - Number(results[index+1])*2}
                stroke="grey"
              />:null}
              <rect x={x0 + Number(index)*10} y={xAxisY - Number(re)*2} width={5} height={5} />
              {re}
            </>
          );
        })}
      </svg>
    </>
  );
}
