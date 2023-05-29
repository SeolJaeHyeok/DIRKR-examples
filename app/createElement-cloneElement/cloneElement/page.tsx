import React, { ReactElement, ReactNode } from "react";

const App = () => {
  return (
    <Parent>
      <Button />
      <br />
      <br />
      <Button />
    </Parent>
  );
};

const Parent = (props) => {
  let btn = "GeeksforGeeks";
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { btn }, null);
        // third parameter is null
        // Because we are not adding
        // any children
      })}
    </div>
  );
};

const Button = (props) => {
  return <button>{props.btn}</button>;
};

export default App;
