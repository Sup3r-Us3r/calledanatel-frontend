import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/Auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const userData = useSelector((state) => state.userData.sign);

  const sign = userData !== undefined ? userData : false;

  if (!sign && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (sign && !isPrivate) {
    return <Redirect to="/" />;
  }

  // Render AuthLayout
  if (!sign) {
    const Layout = !sign && AuthLayout;

    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  // Render the other layouts
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
