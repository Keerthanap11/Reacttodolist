import styled from "styled-components";
import ToDoList from "./TodoTwo";

const Header = styled.h1`
  color: blue;
`;
export default function App() {
  return (
    <div className="App">
      <Header> React using Todo list </Header>
      <ToDoList />
    </div>
  );
}
