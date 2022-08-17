import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { useApp } from '@os/apps/hooks/useApps';
import { WorkrThemeProvider } from '../providers/WorkrThemeProvider';
import { AppTitle } from '@ui/components/AppTitle';
import { Route, Switch } from 'react-router-dom';
import { Workr } from './Workr';
import { WorkerCard } from './WorkerCard';
export const WorkrAppWrapper: React.FC = () => {
  const example = useApp('WORKR');
  return (
    <WorkrThemeProvider>
      <AppWrapper>
        <AppTitle app={example} />
        <AppContent>
          <Switch>
            <Route path="/workr" exact component={Workr} />
            <Route path="/workr/cat" exact component={WorkerCard} />
          </Switch>
        </AppContent>
      </AppWrapper>
    </WorkrThemeProvider>
  );
};
