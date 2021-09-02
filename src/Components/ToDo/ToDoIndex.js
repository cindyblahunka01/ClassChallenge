import React from 'react';
import ToDoForm from "./ToDoForm";
import Completed from "./Completed";
 
export default class ToDoIndex extends React.Component {
    state = {
        todos: []
    };

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    render() {
        return (
            <div>
                <ToDoForm onSubmit={this.addToDo} />
                {this.state.todos.map(todo => (
                    <Completed text={todo.text} />
                ))}
            </div>
        );
    }
}
