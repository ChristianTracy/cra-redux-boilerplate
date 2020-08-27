import React from 'react';
import { Route, Redirect } from 'react-router';

const REDIRECT_URL = '/login';

const PrivateRoute = ({ component: Component, path, ...rest }) => (
    <Route
        path={path}
        render={propsRouter => {
            return localStorage.getItem('userAccessToken') ? (
                <Component {...propsRouter} {...rest} />
            ) : (
                    <Redirect to={REDIRECT_URL} />
                );
        }}
    />
);

export default PrivateRoute;
