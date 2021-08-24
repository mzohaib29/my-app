import React from "react";

function Joke(props){
    return (
        <div>
        <h3 style={{display: props.question? "block" : "none", backgroundColor: "whitesmoke", color: !props.punchLine && "red"}}>Question: {props.question}</h3>
        <h3 style={{display: !props.punchLine && "none",  backgroundColor: "gray",color: "white"}}>Answer: {props.punchLine}</h3>
         <hr/>
        </div>
    )
}
export default Joke
