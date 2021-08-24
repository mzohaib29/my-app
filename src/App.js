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
// import TodoItem from "./components/TodoItem";
// import todosData from "./components/todosData";
// import "./style.css";
import React, {Component} from "react";
import Conditional from "src/Conditional";



class App extends Component {
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {
        setTimeout(() =>{
            this.state({
                isLoading:false
            })
        },2000)
    }


    render() {
        return (
            <div>
               <Conditional isLoading = {this.state.isLoading}/>
            </div>
        )
    }
}

export default App;
