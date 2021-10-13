import React, { FormEvent } from "react";
import { Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { ITodoFormProps } from "./types";

function FormTodo({ addTodo }: ITodoFormProps) {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-5">
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </InputGroup>
        </Form>
    );
}

export default FormTodo;

