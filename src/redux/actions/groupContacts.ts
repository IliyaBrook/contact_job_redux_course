import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {IActionGroupContacts} from "src/types/redux";

export const SET_GROUP_CONTACTS = 'SET_GROUP_CONTACTS';
export const setGroupContacts = (groupContacts: GroupContactsDto): IActionGroupContacts => ({
    type: SET_GROUP_CONTACTS,
    payload: groupContacts,
});

