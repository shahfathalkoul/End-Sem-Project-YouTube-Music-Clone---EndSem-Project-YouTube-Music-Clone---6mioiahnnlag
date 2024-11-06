import Navbar from '../Components /Navbar'
import Sidebar from '../Components /SideBar'
import {Avatar} from 'primereact/avatar'
export default function ProfilePage({isLogin, setIsLogin}){
    const fullName = localStorage.getItem('name');
    let initials = '';

    if (fullName) {
        const nameParts = fullName.split(' ');
        if (nameParts.length === 1) {
            initials = nameParts[0].charAt(0).toUpperCase();
        } else {
            initials = nameParts[0].charAt(0).toUpperCase() + nameParts[nameParts.length - 1].charAt(0).toUpperCase();
        }
    }

    return (<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Sidebar isLogin={isLogin}/>
        <div className='ml-[17%] pt-24'>
            {isLogin && (
                <Avatar
                    className='w-72 h-72 text-9xl'
                    label={initials}
                    shape="circle"
                    style={{backgroundColor: '#ffffff', color: 'C7DBE6'}}
                />
            )}
        </div>
    </>)

}