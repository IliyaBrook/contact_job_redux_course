import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {useSelector} from "react-redux";
import {IReduxState} from "src/types/redux";

export const FavoriteListPage: React.FC = () => {

    const contactsStates = useSelector((state: IReduxState): IReduxState['contactsState'] => {
        return state.contactsState;
    });

    const {allContacts: contacts, favoriteContactsState: favoriteContacts} = contactsStates;
    const filteredContacts = contacts.filter(contact => favoriteContacts.includes(contact.id));

    return (
        <Row xxl={4} className="g-4">
            {filteredContacts.map((contact) => (
                <Col key={contact.id}>
                    <ContactCard contact={contact} withLink/>
                </Col>
            ))}
        </Row>
    );
}
