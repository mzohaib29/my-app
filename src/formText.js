import React, {Component} from "react";

class formText extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount() {
    //     this.setState({loading: true})
    //     fetch("https://swapi.co/api/people/2")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 loading: false,
    //                 character: data
    //             })
    //         })
    // }


    // componentDidMount() {
    //     setTimeout(() =>{
    //         this.setState({
    //             isLoading:false
    //         })
    //     },2000)
    // }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        // const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <form action="">
                <input
                    type= "text"
                    value={this.state.firstName}
                    name= "firstName"
                    placeholder= "First Name"
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type= "text"
                    value={this.state.lastName}
                    name= "lastName"
                    placeholder= "Last Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default formText;