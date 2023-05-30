import React from "react";

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
  let btn = "Milkboy2564";
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        // 세 번째 인자가 null인 경우 어떠한 children도 가지지 않음.
        return React.cloneElement(child, { btn }, null);
      })}
    </div>
  );
};

const Button = (props) => {
  return <button>{props.btn}</button>;
};

export default App;
