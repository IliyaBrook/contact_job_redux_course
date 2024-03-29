import {Formik} from 'formik';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import React from 'react';
import {FormikConfig} from 'formik/dist/types';
import {useSelector} from "react-redux";
import {IReduxState} from "src/types/redux";

export interface FilterFormValues {
  name: string,
  groupId: string
}

interface FilterFormProps extends FormikConfig<Partial<FilterFormValues>> {}

export const FilterForm = ({
  onSubmit,
  initialValues = {}
}: FilterFormProps) => {

  const groupContacts = useSelector((state: IReduxState): IReduxState['contactsState']['groupContactsState']  => state.contactsState.groupContactsState);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleChange, handleSubmit}) => {
        return (
            <Form onSubmit={handleSubmit} onChange={handleSubmit}>
              <Row xxl={4} className="g-4">
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                        id={'name'}
                        name={'name'}
                        onChange={handleChange}
                        placeholder="name"
                        aria-label="name"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Select
                      id={'groupId'}
                      name={'groupId'}
                      aria-label="Поиск по группе"
                      onChange={handleChange}
                  >
                    <option>Open this select menu</option>
                    {groupContacts.map((groupContacts) => (
                        <option value={groupContacts.id} key={groupContacts.id}>{groupContacts.name}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            </Form>
        )
      }}
    </Formik>
  );
}
