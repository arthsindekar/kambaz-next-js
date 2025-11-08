import { ListGroupItem, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id}>
      <Row>
        <Col md={4}>{todo.title}</Col>

        <Col md={1} className="ms-2 me-2">
          <Button
            onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click"
          >
            {" "}
            Edit{" "}
          </Button>
        </Col>

        <Col>
          <Button
            className="bg-danger"
            onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click"
          >
            {" "}
            Delete{" "}
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
