import {
    IActionContacts,
    IActionFavoriteContacts,
    IActionFilterContacts,
    IActionGroupContacts,
    IContactsState
} from "src/types/redux";
import {DATA_CONTACT, DATA_GROUP_CONTACT} from "src/__data__";
import {FilterFormValues} from "src/components/FilterForm";

type TContactsReducerAction =
    IActionContacts |
    IActionFilterContacts |
    IActionFavoriteContacts |
    IActionGroupContacts;

const initialState: IContactsState = {
    allContacts: DATA_CONTACT,
    filteredContacts: DATA_CONTACT,
    favoriteContactsState: [
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id,
    ],
    groupContactsState: DATA_GROUP_CONTACT,
}

export const contactsReducer = (state: IContactsState = initialState, action: TContactsReducerAction) => {
    switch (action.type) {
        case "ADD_CONTACTS":
            return {
                ...state,
                allContacts: [...state.allContacts, ...action.payload],
                filteredContacts: [...state.filteredContacts, ...action.payload],
            };

        case "FILTER_CONTACTS":
            const payload: Partial<FilterFormValues> = action.payload;
            let filteredContacts = state.allContacts;

            if (payload.name) {
                const lowerName = payload.name.toLowerCase();
                filteredContacts = filteredContacts.filter(contact => contact.name.toLowerCase().includes(lowerName));
            }

            if (payload.groupId) {
                const group = state.groupContactsState.find(group => group.id === payload.groupId);
                if (group) {
                    filteredContacts = filteredContacts.filter(contact => group.contactIds.includes(contact.id));
                }
            }

            return {
                ...state,
                filteredContacts: filteredContacts,
            };

        case "SET_FAVORITE_CONTACTS":
            return {
                ...state,
                favoriteContactsState: action.payload,
            };

        case "SET_GROUP_CONTACTS":
            const existingIndex = state.groupContactsState.findIndex(group => group.id === action.payload.id);
            let updatedGroupContacts = [...state.groupContactsState];
            if (existingIndex !== -1) {
                updatedGroupContacts[existingIndex] = action.payload;
            } else {
                updatedGroupContacts.push(action.payload);
            }
            return {
                ...state,
                groupContactsState: updatedGroupContacts,
            };

        default:
            return state;
    }
};
