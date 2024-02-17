import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import {useDispatch, useSelector} from "react-redux";
import store from "src/redux/store";

import {filterContacts} from "src/redux/actions/contacts";
import {IActionFilterContacts, IReduxState} from "src/types/redux";
import {useDebounce} from "src/hooks/useDebounce";


export const ContactListPage: React.FC = () => {

    const dispatch = useDispatch();
    const {filteredContacts: contactsState} = useSelector((state: IReduxState): IReduxState['contactsState'] => state.contactsState);

    const [filterValues, setFilterValues] = useState<Partial<FilterFormValues>>({});

    const debouncedFilterValues = useDebounce(filterValues, 500);

    const onSubmit = useCallback((fv: Partial<FilterFormValues>) => {
        setFilterValues(fv);
    }, []);

    useEffect(() => {
        if (debouncedFilterValues) {
           dispatch(filterContacts(debouncedFilterValues));
        }
    }, [debouncedFilterValues, dispatch]);

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm initialValues={{}} onSubmit={onSubmit}/>
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contactsState.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};
