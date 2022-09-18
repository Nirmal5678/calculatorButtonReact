import React from "react";
class TextBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  add2 = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num + 2
      };
    });
  };

  square = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num * prevState.num
      };
    });
  };

  //double
  double = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num + prevState.num
      };
    });
  };

  //divide by2
  divideby2 = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num / 2
      };
    });
  };

  //Substract2
  substract2 = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num - 2
      };
    });
  };

  render() {
    const { num } = this.state;
    return (
      <div>
        <p>abd</p>
        <div>
          <div>{num}</div>
          {/* <input type="text" id="message" name="message" value={num} /> */}
        </div>

        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={this.add2}> Add2!</button>
          <button onClick={this.square}> Square!</button>
          <button onClick={this.double}> Double!</button>
          <button onClick={this.divideby2}> Divideby2!</button>
          <button onClick={this.substract2}> Substract2!</button>
        </div>
      </div>
    );
  }
}

export default TextBtn;
