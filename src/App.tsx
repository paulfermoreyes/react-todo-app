import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import React from 'react';
import { IndexKind } from 'typescript';
import FormTodo from './components/Todo/Form';
import Todo from './components/Todo/Todo';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ])

  const addTodo = (text: String) => {
    const newTodo = {
      text: "text",
      isDone: false
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const markTodo = (index: IndexKind) => {
    var newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    // newTodos = newTodos.sort((todoA, todoB) => todoA.isDone === true && todoB.isDone === false ? 1 : -1)
    setTodos(newTodos);
  }

  const removeTodo = (index: IndexKind) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
