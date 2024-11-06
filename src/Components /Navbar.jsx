import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {assets} from "../assets/assets";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Avatar} from 'primereact/avatar'
import SearchInput from'./SearchInput'


export default function Navbar({ isLogin, setIsLogin, isSearchNotVisible}) {
    const navigate = useNavigate();
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

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('name');
        setIsLogin(false);
        navigate('/')
    };

    return (
        <div className='flex items-center justify-between bg-black top-0 w-screen fixed z-10'>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6">
                    <img src={assets.threeLines} className="w-6 h-5 cursor-pointer" alt="menu-icon" />
                    <img src={assets.logo} alt='logo' />
                </div>
            </div>
            {isSearchNotVisible ? '' : <SearchInput/> }
            <div className="mr-24">
                {isLogin ? (
                    <div className="relative" onClick={toggleDropdown}>

                        <Avatar className = 'w-12 h-12 text-xl' label={initials} shape="circle" style={{ backgroundColor: '#ffffff', color: 'C7DBE6'  }} />


                        {isDropdownVisible && (
                            <div className="absolute bg-zinc-800 w-48 right-0  rounded-md shadow-lg z-20">
                                <div className='flex items-center p-6'>
                                    <Avatar className = 'w-12 h-12 text-xl' label={initials} shape="circle" style={{ backgroundColor: '#ffffff', color: 'C7DBE6'  }} />

                                    <p className='ml-2 text-white'>{fullName}</p>
                                </div>
                                <hr className="border-gray-600" />
                                <ul>
                                    <Link to = '/profile'>
                                    <li className="px-4 py-2 cursor-pointer p-2 text-white">View Profile</li>
                                    </Link>
                                    <hr className="border-gray-600" />
                                    <li className="px-4 py-2 cursor-pointer text-white" onClick={handleLogout}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className='bg-white text-black rounded-full py-1 px-4' onClick={() => navigate('/signin')}>
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}
