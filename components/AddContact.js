/* import */
import React, { Component } from "react";


class AddContact extends React.Component {

    /* original states for data fields */
    state = {
        fisrtName: "",
        lastName: "",
        phone: "",
        email: "",
    };

    

    /* Event handler for adding contact to list */
    add = (e) => {
        e.preventDefault();
        //Condition to check for correct user input
        if(this.state.fistName === "" || this.state.lastName === "" || this.state.phone === "" || this.state.email === "") {
            alert("One or mare fields are empty, please verify all information");
            return;
        }else if(this.state.phone.length < 9) {
            alert("Incorrect phone number");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({fisrtName: "", lastName:"", phone: "", email: ""});
    };

    /* Rendering, formating and type of information fields, where user inputs the information */
    render(){
    
        return(
            
            <div className="ui main">
                <h1> Add Contact </h1>
                <form className="ui form" onSubmit={this.add}>

                    <div className="image">
                        <input type="field"></input>
                        <button> Upload </button>
                    </div>

                    <div className="field">
                        <label>Firts Name</label>
                        <input type="text" 
                        name="firstName" 
                        placeholder="FirstName" 
                        value = {this.state.firstName} 
                        onChange={(e) => this.setState({firstName: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" 
                        name="lastName" 
                        placeholder="LastName" 
                        value = {this.state.lastName} 
                        onChange={(e) => this.setState({lastName: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Phone</label>
                        <input type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        value = {this.state.phone} 
                        onChange={(e) => this.setState({phone: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email"
                        value = {this.state.email} 
                        onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button blue"> Add </button>
                </form>
            </div>)
    }

}

export default AddContact;