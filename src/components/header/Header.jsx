import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <Card className='rounded-none'>
                <CardBody className='flex flex-row justify-between items-center'>
                    <div>
                        {/* <img src="" alt="" /> Logo Image */}
                        <p className='text-2xl font-bold'>Logo</p>
                    </div>
                    <ul className='flex gap-10'>
                        <li>محصولات</li>
                        <li>تماس با ما</li>
                        <li>درباره ما</li>
                    </ul>
                    <div>
                        <p>Signin / Logout</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Header