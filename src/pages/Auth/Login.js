import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button/Button';

import {
    StyledWrapper,
    StyledHeader,
    StyledForm,
    StyledTopForm,
    StyledBottomForm,
    StyledInput,
    StyledLink,
} from 'pages/Auth/Auth.styles';

const Login = () => (
    <StyledWrapper>
        <StyledHeader>TripMaster</StyledHeader>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={({ email, password }) =>
                axios
                    .post('http://localhost:3000/api/user/login', {
                        email,
                        password,
                    })
                    .then(() => console.log('Login successful'))
                    .catch(err => console.log(err))
            }
        >
            {({ handleChange, handleBlur, values }) => (
                <StyledForm>
                    <StyledTopForm>
                        <StyledInput
                            type="email"
                            name="email"
                            placeholder="Login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <StyledInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <StyledLink as={NavLink} to="/forgot">
                            Forgot you password?
                        </StyledLink>
                    </StyledTopForm>
                    <StyledBottomForm>
                        <Button secondary type="submit">
                            Sign In
                        </Button>
                        <StyledLink as={NavLink} to="/register">
                            Don&apos;t have an account?
                        </StyledLink>
                    </StyledBottomForm>
                </StyledForm>
            )}
        </Formik>
    </StyledWrapper>
);

export default Login;
