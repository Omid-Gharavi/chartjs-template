// import { Card, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import { Card, CardBody } from "@nextui-org/react";
import Link from 'next/link'
import { createContext, useState } from 'react'
import { GoSignIn } from "react-icons/go";
import SidebarMenu from "../sidebarMenu/SidebarMenu";

export const ToggleContext = createContext()
export const pages = [
    {
        name: 'خانه',
        href: '/'
    },
    {
        name: 'تماس با ما',
        href: '#'
    },
    {
        name: 'درباره ما',
        href: '#'
    },
    {
        name: 'جدول',
        href: '/chart'
    },
]

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Card className='rounded-none sticky top-0 z-20'>
                <CardBody className='flex flex-row px-10 max-lg:px-4 py-6 justify-between items-center'>
                    <div>
                        {/* <img src="" alt="Logo" /> */}
                        <p className='text-2xl font-bold'>Logo</p>
                    </div>
                    <ul className='flex gap-10 max-xl:hidden'>
                        {
                            pages.map((page, index) => (
                                <li className="relative headerLines" key={index + 1}><Link href={page.href}>{page.name}</Link>
                                    <span className="absolute w-full scale-0 h-[2px] bg-blue-600 top-[101%] right-0"></span>
                                </li>
                            ))
                        }
                    </ul>
                    <Link
                        href={'/signup'}
                        className='bg-blue-500 text-white flex gap-2 justify-center items-center max-xl:hidden rounded-[1rem] border-[1px] px-4 py-2'>
                        <GoSignIn />
                        <p>ثبت نام | ورود</p>
                    </Link>
                    <div className="menu" onClick={() => setToggle(!toggle)}>
                        <div className={`top bg-black rounded-md h-1 w-7 absolute ${toggle ? 'top-[50%] translate-y-[-50%] rotate-[224deg]' : 'top-0 translate-y-[0%] rotate-0'}`}></div>
                        <div className={`middle bg-black rounded-md h-1 w-7 absolute top-[50%] translate-y-[-50%] ${toggle ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`bottom bg-black rounded-md h-1 w-7 absolute ${toggle ? 'bottom-[50%] translate-y-[50%] -rotate-45' : 'bottom-0 translate-y-[0%] rotate-0'}`}></div>
                    </div>
                </CardBody>
            </Card>
            <ToggleContext.Provider value={{ toggle, setToggle }}>
                <SidebarMenu />
            </ToggleContext.Provider>
        </>
    )
}

export default Header