import * as actionTypes from './actionTypes';
import axios from 'axios';
export const createContact = (contact) => {
  //console.log(contact);
   /* return {
      type: actionTypes.ADD_NEW_CONTACT,
      contact: contact
    }*/
    return async function(dispatch, getState) {
      const response  = await axios.post('http://localhost:3004/contacts', contact).then((response) => {
        dispatch({ type: actionTypes.ADD_NEW_CONTACT, contact:contact })
      }).catch((error) => {console.log(error.message)})
     
    }

  };

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
   /* return async function(dispatch, getState) {
      const response  = await axios.delete('http://localhost:3004/contacts/'+id).then((response) => {
        dispatch({ type: actionTypes.ADD_NEW_CONTACT, id: id })
      }).catch((error) => {console.log(error.message)})
     
    }*/
}
export const getAllContacts = () => {
  return async function(dispatch, getState) {
    const response  = await axios.get("http://localhost:3004/contacts") .then((response) => {
      dispatch({ type: actionTypes.GET_ALL_CONTACTS, payload: response.data })
    }).catch((error) => {console.log(error.message)})
   
  }

};
