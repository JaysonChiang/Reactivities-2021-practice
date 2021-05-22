import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import ActivityDashbard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Route exact path="/activities" component={ActivityDashbard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/createActivity', '/manage/:id']}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default observer(App);
