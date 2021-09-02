// import logo from './logo.svg';
import "./App.css";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import ContactCard from "./components/ContactCard";
// import Joke from "./components/Joke";
// import jokesData from "./components/jokesData";
// import productsData from "./components/vschoolProducts";
// import Product from "./components/Product";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import "./style.css";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            prevState.todos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete;
                    console.log(id, todo?.text);
                }
                return todo;
            });
            // console.log(updatedTodos[1].complete);
            console.log(prevState?.todos);
            return {
                todos: prevState?.todos,
            };
        });
        /*this.setState({
            todos: [],
        })*/
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem key={item.id}
                      item={item}
                      handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}


export default App;
