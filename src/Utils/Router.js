import { useRoutes,Navigate } from "react-router-dom";
import Home from '@/Home';
import Moon from '@/Moon';
import AdminMidAutumn from '@/AdminMidAutumn';
import MyLottey from '@/MyLottey';
import UserInfo from '@/UserInfo';
export default function Router() {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        }, {
            path: '/Moon',
            element: <Moon />
        }, {
            path: '/MyLottey',
            element: <MyLottey />
        }, {
            path: '/UserInfo',
            element: <UserInfo />
        }, {
            path: '/AdminMidAutumn',
            element: <AdminMidAutumn />
        //重定向
        }, {
            path: '/MoonRedirect',
            element: <Navigate to='/Moon' />
        }
    ]);
    return routes;
}
