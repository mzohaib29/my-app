import React from "react";

class Header extends React.Component{
    render() {

        return (
            <header>
                <p> welcome, {this.props.username}!</p>
            </header>
        )

    }
}
export default Header
