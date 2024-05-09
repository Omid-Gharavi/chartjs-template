import { datas } from '@/data/fakeData'
import { Button, Card, CardBody } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import AutoComplete from '../autoComplete/AutoComplete'

const Dashboard = () => {
    const options = datas

    return (
        <Card className='w-[300px] max-lg:w-full'>
            <CardBody>
                <AutoComplete options={options} />
            </CardBody>
        </Card>
    )
}

export default Dashboard