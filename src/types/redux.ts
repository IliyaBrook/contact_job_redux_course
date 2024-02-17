import {ContactDto} from "src/types/dto/ContactDto";
import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {FILTER_CONTACTS, ADD_CONTACTS} from "src/redux/actions/contacts";
import {SET_FAVORITE_CONTACTS} from "src/redux/actions/favoriteContacts";
import {SET_GROUP_CONTACTS} from "src/redux/actions/groupContacts";
import {FilterFormValues} from "src/components/FilterForm";

export interface IContactsState {
    allContacts: ContactDto[];
    filteredContacts: ContactDto[];
    favoriteContactsState: FavoriteContactsDto;
    groupContactsState: GroupContactsDto[];
}

export interface IReduxState {
    contactsState: IContactsState;
}

export interface IActionContacts {
    type: typeof ADD_CONTACTS;
    payload: ContactDto[];
}

export interface IActionFilterContacts {
    type: typeof FILTER_CONTACTS,
    payload: Partial<FilterFormValues>
}

export interface IActionFavoriteContacts {
    type: typeof SET_FAVORITE_CONTACTS;
    payload: FavoriteContactsDto;
}

export interface IActionGroupContacts {
    type: typeof SET_GROUP_CONTACTS;
    payload: GroupContactsDto;
}
