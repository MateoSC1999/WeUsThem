/* import */
import React from "react";

//rundown of contant card on page and implements garbage icon to delete contacts
const ContactC = (props) => {
    const {id, fisrtName, lastName ,phone, email} = props.contact;
    return ( 
        <div className="item">
                <div className="content">
                    <div className="header"> {fisrtName} </div>
                    <div>{lastName}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" 
                style={{color:"red", marginTop: "7px"}}
                onClick={() => props.clickHandler(id)}
                ></i>
                
            </div>
    );
        
};
 
export default ContactC;