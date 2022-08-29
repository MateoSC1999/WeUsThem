/* import */
import React from "react";
import ContactC from "./ContactC";

//contact list rundown
const ContactList = (props) => {

    //deletes a specific contact based on ID
    const deleteContactHandler = (id) => { props.getContactId(id)};

    //renders contact list and deals with deletion as well
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactC contact={contact} clickHandler= {deleteContactHandler} key={contact.id}/>
        );
    });

    return (
        <div className="ui celled list"> 
        {renderContactList} 
        </div>
    );


};

export default ContactList;