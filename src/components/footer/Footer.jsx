import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { pages } from '../header/Header';
import Link from 'next/link';

const Footer = () => {
    const socialIcons = [
        {
            icon: <RiFacebookFill />
        },
        {
            icon: <AiOutlineInstagram />
        },
        {
            icon: <BiLogoTelegram />
        },
    ]

    return (
        <>
            <Card className='rounded-none'>
                <CardBody className='flex flex-col items-center gap-8 py-7'>
                    {/* <p className='font-bold'>Logo</p> */}
                    <div className='flex gap-7'>
                        {
                            socialIcons.map((icon, index) => (
                                <SocialMedia key={index + 1} icon={icon.icon} />
                            ))
                        }
                    </div>
                    <ul className='flex gap-10'>
                        {
                            pages.map((page, index) => (
                                <li key={index + 1} className='relative headerLines'><Link href={page.href}>{page.name}</Link>
                                    <span className="absolute w-full scale-0 h-[2px] bg-blue-600 top-[101%] right-0"></span>
                                </li>
                            ))
                        }
                    </ul>
                </CardBody>
                <div className='flex justify-center items-center py-1 bg-zinc-100'>Chartjs</div>
            </Card>
        </>
    )
}

const SocialMedia = ({ icon }) => {
    return (
        <div
            className='socialMedia'>
            {icon}
        </div>
    )
}

export default Footer