import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';
// import { RestClient } from '../rest-client/rest-client';
// import { getCookie } from '../utils/cookies';

export const withAuth = async OriginComponent => {
  class WrappedComponent extends React.Component {
    render() {
      const { token } = this.props;

      return token ? (
        <OriginComponent {...this.props} />
      ) : (
        <Redirect to="/sign-in" />
      );
    }
  }

  const mapStateToProps = state => ({
    token: get(state, ['authReducer', 'token'])
  });

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};
