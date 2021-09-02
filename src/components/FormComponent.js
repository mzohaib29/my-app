


function FormComponent(props){
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    placeholder="First Name"
                    onChange={props.handleChange}

                />
                <br/>
                <input
                    name="lastName"
                    value={props.data.lastName}
                    placeholder="Last Name"
                    onChange={props.handleChange}


                />
                <br/>
                <input
                    name="age"
                    value={props.data.age}
                    placeholder="age"
                    onChange={props.handleChange}

                />
                <br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    />
                </label> Female
                <br/><br/>

                <select
                    value={props.data.destination}
                    onChange={props.handleChange}
                    name="destination"
                >
                    <option value="">-- Please choose a destination --</option>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="kashmir">Kashmir</option>
                </select>
                <br/><br/>
                <label>Have you any dietary restrictions: </label>
                <br/>
                <input
                    type="checkbox"
                    name="isVegan"
                    checked={props.data.isVegan}
                    onChange={props.handleChange}
                /> Vegan ?
                <br/>
                <input
                    type="checkbox"
                    name="isKosher"
                    checked={props.data.isKosher}
                    onChange={props.handleChange}
                /> Kosher ?
                <br/>
                <input
                    type="checkbox"
                    name="isLactoseFree"
                    checked={props.data.isLactoseFree}
                    onChange={props.handleChange}
                /> Lactose Free ?
                <br/>
                <br/>
                <button onClick={alert}>Submit</button>
            </form>
            <hr/>
            <h1>Entered Info.</h1>
            <p>Your name is: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age is: {props.data.age}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>

            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>


        </main>
    )

}

export default FormComponent;