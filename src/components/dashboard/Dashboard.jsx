import { datas, fakeData } from '@/data/fakeData'
import { Card, CardBody } from '@nextui-org/react'
import AutoComplete from '../autoComplete/AutoComplete'
import Calendar from '../calendar/Calendar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDatas } from '@/app/dataSlice'

const Dashboard = () => {
    // const options = datas
    const data = useSelector(state => state.data.datasets)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDatas())
    }, [])

    return (
        <Card className='w-[300px] max-lg:w-full'>
            <CardBody>
                <AutoComplete options={data} />
                <div className='mt-4'>
                    <Calendar />
                </div>
            </CardBody>
        </Card>
    )
}

export default Dashboard