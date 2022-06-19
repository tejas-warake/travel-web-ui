import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white" >
            <h1 onClick={handleNav} className={logo ? 'hidden':'block'}>
                LessGo!
            </h1>

            <ul className='hidden md:flex'>
                <li className='mdli'>Home</li>
                <li className='mdli'>Trips</li>
                <li className='mdli'>Travel</li>
                <li className='mdli'>Locations</li>
                <li className='mdli'>Book</li>
            </ul>

            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>

            <div  onClick={handleNav} className='md:hidden z-10'>
                { nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20} /> }
            </div>

            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
                <ul>
                    <h1>LessGo</h1>
                    <li className='border-b'>Home</li>
                    <li className='border-b'>Trips</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>Locations</li>
                    <li className='border-b'>Book</li>

                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>

                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar