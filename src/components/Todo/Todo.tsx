import { Button, Form } from "react-bootstrap";
import { ITodoProps } from "./types";

function Todo({ todo, index, markTodo, removeTodo }: ITodoProps) {
    return (
        <div
            className="todo"

        >
            <div style={{width: '18px'}}>
                <Form.Check
                    type="checkbox"
                    id={`todo-checkbox`}
                    onClick={() => markTodo(index)}
                />
            </div>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                {/* <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '} */}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

export default Todo;

