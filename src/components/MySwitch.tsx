import React from 'react';
import { Switch, useLocation } from 'react-router';
import { usePrevState } from '../hooks';

export const MySwitch: React.FC = ({ children }) => {
  const location = useLocation();
  const prevLocation = usePrevState(location);
  return (
    <>
      <Switch location={location}>{children}</Switch>
      {prevLocation && <Switch location={prevLocation}>{children}</Switch>}
    </>
  );
};
