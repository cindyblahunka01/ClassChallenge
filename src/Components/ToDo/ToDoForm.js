import React from 'react';

export default class ToDoForm extends React.Component {
    state = {
        text: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false
        });
        this.setState({
            test: ""
        });
    };

    render() {  
        return (
          <form onSumbit={this.handleSumbit}>
            <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="enter to do..." 
            />
            <button onClick={this.handleSubmit}>add to do item</button>
          </form>
        );
    }
}