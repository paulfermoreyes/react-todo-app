import { IndexKind } from "typescript"

export type ITodo = {
    text: String;
    isDone: Boolean;
}

export type ITodoProps = {
    todo: ITodo;
    index: IndexKind;
    markTodo: (i: IndexKind) => void;
    removeTodo: (i: IndexKind) => void;
}
/*  */
export type ITodoFormProps = {
    addTodo: (s: string) => void;
}