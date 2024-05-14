// import { Card, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import { Card, CardBody } from "@nextui-org/react";
import Link from 'next/link'
import { useState } from 'react'
import { GoSignIn } from "react-icons/go";

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
                        <li><Link href={'/'}>خانه</Link></li>
                        <li><Link href={"#"}>تماس با ما</Link></li>
                        <li><Link href={'#'}>درباره ما</Link></li>
                        <li><Link href={'/chart'}>جدول</Link ></li>
                    </ul>
                    <Link
                        href={'#'}
                        className='flex gap-2 justify-center items-center max-xl:hidden rounded-lg border-zinc-500 border-[1px] px-4 py-2'>
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
        </>
    )
}

export default Header