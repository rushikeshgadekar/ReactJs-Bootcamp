import { Component } from "react";
import styled from "styled-components";

const First = styled.div`
  margin: 20px;
  padding: 20px;
  border: 0.2px solid;
`;
const Button = styled.button`
  min-width: 150px;

  padding: 10px;
  color: blue;
  &:focus {
    transform: scale(0.95);
    cursor: pointer;
    transition: 0.2s ease-in;
    background-color: #5cd15c;
  }
  &:hover {
    cursor: pointer;
    background-color: #aac8e9;
  }
`;
class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Initial state",
    };
  }

  handleBtnClick = () => {
    this.setState({
      demo: "State has been changed",
    });
  };

  render() {
    return (
      <First>
        <h1>{this.state.demo}</h1>
        <h2>Click on the button to see some magic happen!</h2>
        <Button onClick={this.handleBtnClick}>Click Me</Button>
      </First>
    );
  }
}

export default ClassBased;
