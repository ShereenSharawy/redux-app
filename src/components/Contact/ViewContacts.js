import React from "react";

function ViewContacts(props){
    function removeContactHandler(id){
        console.log('id',id)
        props.removeContact(id)
    }

    return(
        <>
        <h3>ViewContacts</h3>
        {props.contacts.map((contact,index) => (

        <li key={contact.name}><span>{contact.name}</span> <button type='text' onClick={() =>{removeContactHandler(index)}}>remove</button></li>
        ))}

        </>
    )
}
export default ViewContacts;