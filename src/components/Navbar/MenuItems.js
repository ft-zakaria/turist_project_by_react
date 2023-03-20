import { FaHouseUser, FaInfoCircle, FaBriefcase, FaPortrait } from "react-icons/fa";

const MenuItems = [
    {
        title : "Home",
        url : "/",
        cName : "nav-links",
        icon : <FaHouseUser/>
    },
    {
        title : "About",
        url : "/about",
        cName : "nav-links",
        icon : <FaInfoCircle/>
    },
    {
        title : "Service",
        url : "/service",
        cName : "nav-links",
        icon : <FaBriefcase/>
    },
    {
        title : "Contact",
        url : "/contact",
        cName : "nav-links",
        icon : <FaPortrait/>
    },
    {
        title : "Sign up",
        url : "/signup",
        cName : "nav-links-mobile",
    },
]

export default MenuItems;