import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.ADD_NEW_CONTACT:
      return [...state,action.contact]
  
      case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
      case actionTypes.GET_ALL_CONTACTS:
        return action.payload;
      default:
            return state;
    }
  };