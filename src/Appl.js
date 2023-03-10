import { Apple } from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

 export default function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
