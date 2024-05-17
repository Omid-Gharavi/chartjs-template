import { Card, CardBody } from '@nextui-org/react'
import React, { useContext } from 'react'
import { ToggleContext } from '../header/Header'
import Link from 'next/link'

const SidebarMenu = () => {
    const toggleContext = useContext(ToggleContext)
    const { toggle, setToggle } = toggleContext

    return (
        <Card
            className={`fixed z-50 h-screen top-0 w-[250px] transition-all duration-[0.5s] ease-in-out  ${toggle ? 'translate-x-[0px]' : 'translate-x-[250px]'}`}>
            <CardBody className='text-right'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p className='font-bold text-[2rem]'>Logo</p>
                </div>
                <hr className='mt-2' />
                <ul className='flex flex-col gap-4 mt-10'>
                    <li onClick={() => setToggle(false)}><Link href={'/'}>خانه</Link></li>
                    <li onClick={() => setToggle(false)}><Link href={"#"}>تماس با ما</Link></li>
                    <li onClick={() => setToggle(false)}><Link href={'#'}>درباره ما</Link></li>
                    <li onClick={() => setToggle(false)}><Link href={'/chart'}>جدول</Link ></li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default SidebarMenu