import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useSelector} from "react-redux";
import {IReduxState} from "src/types/redux";

export const GroupPage: React.FC = () => {

  const {groupId} = useParams<{ groupId: string }>();
  const {allContacts, groupContactsState} = useSelector((state: IReduxState) => state.contactsState);
  const groupContacts = groupContactsState.find(({id}) => id === groupId);
  const contacts = groupContacts ? allContacts.filter(({id}) => groupContacts.contactIds.includes(id)) : [];

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
}
