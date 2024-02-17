import React, {FC, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useSelector} from "react-redux";
import {IReduxState} from "src/types/redux";


export const ContactPage: FC = () => {

  const contactsState = useSelector((state:IReduxState):IReduxState['contactsState']['allContacts']  => state.contactsState.allContacts);
  const {contactId} = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    setContact(() => contactsState.find(({id}) => id === contactId));
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
