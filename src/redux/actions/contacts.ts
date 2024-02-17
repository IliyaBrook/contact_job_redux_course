import {FilterFormValues} from "src/components/FilterForm";

export const ADD_CONTACTS = 'ADD_CONTACTS';
export const FILTER_CONTACTS = 'FILTER_CONTACTS';

export const filterContacts = (value: Partial<FilterFormValues>): {type: typeof FILTER_CONTACTS, payload: Partial<FilterFormValues>} => ({
    type: FILTER_CONTACTS,
    payload: value,
});
