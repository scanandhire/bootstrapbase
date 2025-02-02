import React from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import RegistrationForm from 'components/authentication/RegistrationForm';
import bgImg from 'assets/img/generic/15.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import paths from 'routes/paths';

const Registration = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <Flex alignItems="center" justifyContent="between">
        <h3>Register</h3>
        <p className="mb-0 fs-10">
          <span className="fw-semibold">Already User? </span>
          <Link to={paths.splitLogin}>Login</Link>
        </p>
      </Flex>
      <RegistrationForm layout="split" hasLabel />
    </AuthSplitLayout>
  );
};

export default Registration;
