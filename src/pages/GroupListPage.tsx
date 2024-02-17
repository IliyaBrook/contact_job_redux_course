import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useSelector} from "react-redux";
import {IReduxState} from "src/types/redux";

export const GroupListPage: React.FC = () => {

  const { groupContactsState: groupContactsState } = useSelector((state:IReduxState): IReduxState['contactsState']  => state.contactsState);

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
}
