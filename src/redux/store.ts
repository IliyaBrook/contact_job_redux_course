import { createStore, combineReducers } from 'redux';
import {contactsReducer} from "src/redux/reducers/contactsReducer";

const rootReducer = combineReducers({
  contactsState: contactsReducer
});

const store = createStore(rootReducer);

export default store;
