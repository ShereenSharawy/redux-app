import React ,{useRef, useState} from "react";

function AddContact(props){

    const[contact,setContact]=useState({name:"",id:Math.floor(Math.random() * 100)});
    const inputRef = useRef();
    const[error,setError]= useState(false);

    function inputChangeHandler(e){
        const value =e.target.value;
        setContact({...contact,name: value})

  
    }

    function addContactHandler(e){
       e.preventDefault();
       if(contact.name !==""){
        setError(false);
        props.addContact(contact);
        inputRef.current.value="";
       }
       else{
        setError(true);
       }

    }

    return(
        <>
        <h1>Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={addContactHandler}>
            <input type="text" onChange={inputChangeHandler} name="contact" ref={inputRef} />
            <input type="submit" />
            {error && <div>You need to add  a valid value</div>}
          </form>
        </div>
        </>
    )
}
export default AddContact;