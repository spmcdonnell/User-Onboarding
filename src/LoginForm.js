import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginForm({ values, errors, touched, isSubmitting }) {
    return (
        <div className="login-form">
            <Form>
                <div>
                    <label>
                        Name:
                        <Field name="name" type="text" placeholder="Name" />
                    </label>
                    <label>
                        Email:
                        <Field name="email" type="text" placeholder="Email address" />
                    </label>
                    <label>
                        Password:
                        <Field name="password" type="text" placeholder="Password" />
                    </label>
                </div>
                <div>
                    <label>
                        Agree to Terms of Service:
                        <Field name="tos" type="checkbox" checked={values.tos} />
                    </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password is required')
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        axios
            .post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res); // Data was created successfully and logs to console
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(LoginForm);

export default FormikLoginForm;
