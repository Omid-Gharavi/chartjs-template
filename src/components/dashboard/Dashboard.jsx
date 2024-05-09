import { datas, fakeData } from '@/data/fakeData'
import { Card, CardBody } from '@nextui-org/react'
import AutoComplete from '../autoComplete/AutoComplete'
import Calendar from '../calendar/Calendar'

const Dashboard = () => {
    const options = datas

    return (
        <Card className='w-[300px] max-lg:w-full'>
            <CardBody>
                <AutoComplete options={options} />
                <div className='mt-4'>
                    <Calendar />
                </div>
            </CardBody>
        </Card>
    )
}

export default Dashboard