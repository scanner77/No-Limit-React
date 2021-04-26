import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai' 
import * as IoIcons from 'react-icons/io'
// import * as ImIcons from 'react-icons/Im'
// import * as MdAccount from 'react-icons/Md'
// import * as HiLog from 'react-icons/Hi'
    // import * as SiSignUp from 'react-icons/Si'

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'EnrolledCourses',
        path: '/enrolledcourses',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'MyAccount',
        path: '/myaccount',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiFillHome  />, //correct this later
        cName: 'nav-text'
    },
    {
        title: 'SignUp',
        path: '/signup',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    }
]