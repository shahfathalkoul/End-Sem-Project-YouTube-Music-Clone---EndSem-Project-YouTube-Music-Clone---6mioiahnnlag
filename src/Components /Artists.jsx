import Navbar from './Navbar'
import SideBar from './SideBar'
import {useEffect, useState} from "react";
export default function Artists({isLogin, setIsLogin}){

    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
    </>)

}