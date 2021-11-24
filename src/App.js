import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './components/helpers/routes';
import * as ROUTES from './constants/routes';
import { useAuthListner } from './hooks';
import { Browse, Home, Signin, Signup } from './pages';

export default function App() {
    const { user } = useAuthListner();
    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}

// Hai,now your watching vedio length is 7.53 min😎🧡💖&& 8.21 hours
