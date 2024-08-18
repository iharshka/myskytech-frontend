import {Menu, X} from "lucide-react";
import { useState } from "react";
import { LoaderPinwheel } from 'lucide-react';
import { navItems } from '../constants/index';

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <LoaderPinwheel className='h-10 w-10 mr-2 text-indigo-500'/>
                    <span className="text-xl tracking-tight">MySkyTech</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:underline hover:decoration-indigo-600 focus:text-indigo-500'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md'>Newsletter</a>
                    {/* <a href="#" className='bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md'>Schedule a call</a> */}
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileNav}>
                        {mobileNavOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileNavOpen && (
                <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                    <ul>
                        {navItems.map((item, index) => (
                        <li key={index} className='decoration-none hover:underline hover:decoration-indigo-600 py-3 text-center'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                        ))}
                    </ul>
                    <div className="lg:hidden flex justify-center space-x-5 items-center">
                        <a href="#" className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md">Newsletter</a>
                        {/* <a href="#" className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md">Schedule a Call</a> */}
                    </div>
                </div>
            )}
        </div>
        </nav>
        </>
    )
}