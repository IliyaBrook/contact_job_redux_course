import {FavoriteContactsDto} from "src/types/dto/FavoriteContactsDto";
import {IActionFavoriteContacts} from "src/types/redux";

export const SET_FAVORITE_CONTACTS = 'SET_FAVORITE_CONTACTS';
export const setFavoriteContacts = (favoriteContacts: FavoriteContactsDto): IActionFavoriteContacts => ({
    type: SET_FAVORITE_CONTACTS,
    payload: favoriteContacts,
});
