// import { Card, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: 'خانه',
            href: '/'
        },
        {
            name: 'جدول',
            href: '/chart'
        },
        {
            name: 'درباره ما',
            href: '#'
        },
    ];

    return (
        <>
            {/* <Card className='rounded-none'>
                <CardBody className='flex flex-row justify-between items-center'>
                    <div>
                        <img src="" alt="" /> Logo Image
                        <p className='text-2xl font-bold'>Logo</p>
                    </div>
                    <ul className='flex gap-10 max-xl:hidden'>
                        <li><Link href={'/'}>خانه</Link></li>
                        <li>تماس با ما</li>
                        <li>درباره ما</li>
                        <li><Link href={'/chart'}>جدول</Link ></li>
                    </ul>
                    <div className='max-xl:hidden'>
                        <p>Signin / Logout</p>
                    </div>

                </CardBody>
            </Card> */}

            <Navbar isBordered isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="justify-center">
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>
                <div>
                    <NavbarContent>
                        <p className="font-bold text-inherit">Logo</p>
                    </NavbarContent>
                </div>
                <div>
                    <NavbarContent className="hidden sm:flex gap-10" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="/">
                                خانه
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="/chart">
                                جدول
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                درباره ما
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </div>
                <div className="max-xl:hidden">
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </div>


                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href={item.href}
                                size="lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}

export default Header