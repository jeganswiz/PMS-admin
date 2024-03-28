import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { PATH_AFTER_LOGIN } from '../config';
import AdminLayout from '../layouts/AdminLayout';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
    const { pathname } = useLocation();
    return (
        <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/admin')}/>}>
            <Component {...props} />
        </Suspense>
    )
}
const RouteApp = () => {
    let routes = useRoutes([
        {
            path : '/',
            element : <Navigate to={PATH_AFTER_LOGIN} replace/>
        },
        {
            path : 'auth',
            children : [
                { path : 'login', element : <ApprisalCycle/>, index : true },
            ]
        },
        {
            path : 'admin',
            element : (
                <AdminLayout />
            ),
            children : [
                { element : <Navigate to={PATH_AFTER_LOGIN} />, index : true },
                { path : 'apprisalcycle', element : <ApprisalCycle/> },
                { path : 'apprisalcycle/add', element : <ApprisalCycleAdd/> },
                { path : 'dashboard', element : <Dashboard/> }
            ],
        }
    ])
    return routes;
};
export default function HookRouter() {
    return (
        <Router>
            <RouteApp />
        </Router>
    )
}

// ADMIN PAGES
const ApprisalCycle = Loadable(lazy(() => import('../pages/apprisalcycle/ApprisalCycle')));
const ApprisalCycleAdd = Loadable(lazy(() => import('../pages/apprisalcycle/ApprisalCycleAdd')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')))