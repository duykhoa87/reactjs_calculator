import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import axios from 'axios';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    var result = calculate(this.state, buttonName);
    if (buttonName === '=') {
      axios.post(`https://secure-spire-43225.herokuapp.com/log`, {state: this.state, result: result.toal})
        .then(res => {
          console.log(res.data);
        });
    }
    this.setState(result);
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
