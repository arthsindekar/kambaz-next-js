
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ReduxLab3() {
    const todos = useSelector((state: RootState) => state.todosReducer.todos);
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
      ))}
    </ListGroup>
  );
}
