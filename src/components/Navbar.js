import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import resume from "../assets/resume.pdf"

export default function Navbar() {
    const [bgClass, setBgClass] = useState('bg-transparent');

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setBgClass('bg-dark-500');
        } else {
            setBgClass('bg-transparent');
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`transition duration-250 ease-in-out fixed z-50  w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36 ${bgClass}`}>
            <div className="flex justify-between items-center text-white">
                <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
                    <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
                    <li className="p-4"><a href="#portfolio" className="hover:underline">Portflio</a></li>
                </ul>
                <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Resume</a>
            </div>
        </div>
    )
}
