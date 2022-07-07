import React, { FC } from 'react';
import { TextField, SelectField } from './FormField';
import { Field, Formik, Form } from 'formik';
import { Entry } from '../types';

interface Props {
    onSubmit: (values: any) => void,
    onCancel: () => void,
    id: string;
}

const AddEntryForm = ({ onSubmit, onCancel, id }: Props) => {
    return (
        <Formik initialValues={{
            id: id,
            description: '',
            date: '',
            specialist: '',
            diagnosisCodes: []
        }} onSubmit={onSubmit}>
            <Form>
                <Field label='id' placeholder={id} name="id" component={TextField} />
                <Field label='description' placeholder='description' name="description" component={TextField} />
                <Field label='date' placeholder='date' name="date" component={TextField} />
                <Field label='specialist' placeholder='specialist' name="specialist" component={TextField} />
                <Field label='diagnosisCodes' placeholder='diagnosisCodes' name="diagnosisCodes" component={TextField} />
            </Form>
        </Formik>
    );
}

export default AddEntryForm;