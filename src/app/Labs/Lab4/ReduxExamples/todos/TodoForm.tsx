import { ListGroupItem, Button, FormControl, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
      <Row>
        <Col md={4}>
          <FormControl
            value={todo.title}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
          />
        </Col>
        <Col md={1} className="me-5">
          <Button
            style={{
              backgroundColor: "orange",
              color: "black",
              border: "none",
            }}
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
          >
            {" "}
            Update{" "}
          </Button>
        </Col>

        <Col>
          <Button
            className="bg-success"
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
          >
            {" "}
            Add{" "}
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
