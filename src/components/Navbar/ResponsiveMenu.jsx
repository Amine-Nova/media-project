import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = [
    {
        id: 1,
        title : 'HOW WE WORK',
        url : '/'
    },
    {
        id: 2,
        title : 'ABOUT US',
        url : '/about'
    },
    {
        id: 3,
        title : 'SERVICES',
        url : '/projects'
    },
    {
        id: 4,
        title : 'PORTFOLIO',
        url : '/contact'
    },
    {
        id: 5,
        title : 'FAQ',
        url : '/projects'
    },
    {
        id: 6,
        title : 'CONTACT',
        url : '/contact'
    },
]

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
        {open && (
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute top-20 left-0 w-full h-screen z-20">
                <div className="text-xl top font-semibold uppercase bg-blue-600 text-white py-10 m-6 rounded-2xl">
                    <ul className="flex flex-col items-center gap-10">
                    {MobileMenu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.url} className='inline-block py-1 px-3'>{menu.title}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
};

export default ResponsiveMenu;