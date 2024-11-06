import  { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Library from './Pages/Library';
import Upgrade from './Pages/Upgrade';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Songs from './Components /Songs';
import Albums from './Components /Albums';
import Artists from './Components /Artists';
import Playlists from './Components /Playlists';
import { AudioContext } from './context/AudioContext';
import AlbumDetails from './Components /AlbumDetails';
import ProfilePage from './Pages/ProfilePage'
import Mood from './Components /Mood'

function App() {
    const { isLogin, setIsLogin } = useContext(AudioContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home isLogin={isLogin} setIsLogin={setIsLogin}/>,
        },
        {
            path: '/mood/:mood',
            element:<Mood isLogin={isLogin} setIsLogin={setIsLogin} />,
        },
        {
            path: '/signin',
            element: <SignIn setIsLogin={setIsLogin} />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
        {
            path: '/profile',
            element: <ProfilePage isLogin={isLogin} setIsLogin={setIsLogin} />
        },
        {
            path: '/library/:page',
            element: <Library isLogin={isLogin} setIsLogin={setIsLogin} />
        },
        {
            path: '/subscription',
            element: <Upgrade isLogin={isLogin} setIsLogin={setIsLogin} />,
        },
    ]);

    return (
        <div className="bg-black min-h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
