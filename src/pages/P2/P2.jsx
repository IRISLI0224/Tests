import { useState } from "react";

export function P2() {
  const [Pnumber, setPNumber] = useState(23245);
  const [result, setResult] = useState();

  const Check=(checkNumber)=>{
     const string =checkNumber.toString();
     const eachNumber =[...string];
     if (eachNumber[0]>eachNumber[eachNumber.length-1]) return(false);
     for (var i = 0; i<eachNumber.length; i++) {
         if(eachNumber[i]>eachNumber[i+1]) return(false);
         if(i===eachNumber.length-1)      return(true);
      }
  }

  const Find = () => {
    for (var i = Pnumber; i >0; i--) {
      if (Check(i)) {
          setResult(i);
          console.log(i);
          return;
      }
    }
    console.log("result: " + result);
  };

  const handleDataChange = (event) => {
    const { value } = event.target;
    setPNumber(value);
  };
  return (
    <>
      <h1>P2</h1>
      <input name="Pnumber" onChange={handleDataChange} />
      <button onClick={Find}>Find</button>
      <div>Result: {result}</div>
    </>
  );
}
