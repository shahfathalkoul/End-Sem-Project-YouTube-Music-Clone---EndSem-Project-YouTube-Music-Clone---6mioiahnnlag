import {assets} from "../assets/assets"
import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import {AudioContext} from '../context/AudioContext'
export default function Sidebar({isLogin, handleButtonClick}) {

    return (
        <div className='w-[17%] h-screen bg-black fixed top-16'>
            <Link to="/">
                <div
                    className="flex items-center text-white p-3 gap-6 mb-2 mt-4 hover:bg-neutral-700 rounded-lg">
                    <img src={assets.home} className="w-4 h-5 cursor-pointer"/>
                    <p>Home</p>
                </div>
            </Link>

            <Link to="/library/music">
            <div
                className="flex items-center text-white p-3 gap-6 mb-2 hover:bg-neutral-700 rounded-lg ">
                <img src={assets.library} className="w-5 h-5 cursor-pointer"/>
                <p>Library</p>

            </div>
            </Link>

            <Link to="/subscription/">
            <div className="flex items-center text-white p-3 gap-6 mb-2 hover:bg-neutral-700  rounded-lg">
                <img src={assets.subscription} className="w-5 h-5 cursor-pointer"/>
                <p>Upgrade</p>
            </div>
            </Link>

        </div>
    );
}
