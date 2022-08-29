/* import */
import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  //local storage key for saving and retreaving information
  const LOCAL_STORAGE_KEY = "Constacts";
  const [contacts, setContacts] = useState([]);

  //handler for adding contacts
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  //handler to remove contact 
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    //sets updated version 
    setContacts(newContactList);
  };

  //saves contact information into local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts]);

  //retreave information from local storage
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts);
  },[]);


  return (
    <div className='ui container'>
    <Header />
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts} getContactId= {removeContactHandler}/>
     </div>
    );
}

export default App;
