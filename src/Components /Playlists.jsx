import Navbar from './Navbar'
import SideBar from './SideBar'
export default function Playlists({isLogin, setIsLogin}){
    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
    </>)
}