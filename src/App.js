import "./App.css";
import ClassBased from "./component/ClassBased";
import FunctionBased from "./component/FunctionBased";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Main>
      <>
        <ClassBased />
        <FunctionBased />
      </>
    </Main>
  );
}

export default App;
