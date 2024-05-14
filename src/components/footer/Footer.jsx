import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Card className='rounded-none'>
                <CardBody>
                    <div className='py-10 flex max-xl:flex-col max-xl:items-center flex-row-reverse flex-wrap justify-center gap-10'>
                        <div className='mr-11 max-xl:mr-[unset]'>
                            <img src="" alt="" />
                            <p className='font-bold text-2xl'>Logo</p>
                        </div>
                        <ul>
                            <li>Click</li>
                            <div className='flex flex-col gap-1 mt-4'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>About</li>
                            </div>
                        </ul>
                        <ul>
                            <li>Click</li>
                            <div className='flex flex-col gap-1 mt-4'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>About</li>
                            </div>
                        </ul>
                        <ul>
                            <li>Click</li>
                            <div className='flex flex-col gap-1 mt-4'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>About</li>
                            </div>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Footer