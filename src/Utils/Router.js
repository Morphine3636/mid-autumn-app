import { useRoutes,Navigate } from "react-router-dom";
import Home from '@/Home';
import Moon from '@/Moon';
import MoonSuccess from '@/MoonSuccess';
import AdminMidAutumn from '@/AdminMidAutumn';
import MyLottey from '@/MyLottey';
import UserInfo from '@/UserInfo';
import Draw from '@/Draw';
export default function Router() {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        }, {
            path: '/Moon',
            element: <Moon />
        },{
            path: '/MoonSuccess',
            element: <MoonSuccess />
        }, {
            path: '/MyLottey',
            element: <MyLottey />
        }, {
            path: '/UserInfo',
            element: <UserInfo />
        }, {
            path: '/Draw',
            element: <Draw />
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
