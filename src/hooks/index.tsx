import React from 'react';
import { AuthInvision } from './AuthContext';

const AppInvision: React.FC = ({ children }) => {
  return <AuthInvision>{children}</AuthInvision>;
};

export default AppInvision;
