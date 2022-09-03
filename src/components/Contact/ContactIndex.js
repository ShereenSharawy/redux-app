import React,{useEffect} from "react";
import AddContact from "./AddContact";
import ViewContacts from "./ViewContacts";
import {createContact,deleteContact,getAllContacts} from '../../store/actions/contactAction';
import { useSelector,useDispatch } from "react-redux";
function ContactIndex(){
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
    //const [contacts,SetContacts] = useState([]);

    function addContactHandler(newContact){
     ///   SetContacts((oldArray) => [...oldArray,newContact]);
     dispatch(createContact(newContact));
    }
    function removeContactHandler(id){
      //  SetContacts(oldArray => {return oldArray.filter((value, i) => i !== index)})
      console.log('idw',id)
      dispatch(deleteContact(id));
    }
  
    useEffect(()=>{
     dispatch(getAllContacts());
    },[])
   return(
    <>
      <AddContact addContact={addContactHandler}/>
      <ViewContacts contacts={contacts} removeContact={removeContactHandler}/>
     
    </>
   )
}
export default ContactIndex;