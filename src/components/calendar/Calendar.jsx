import { history } from "@/app/dataSlice"
import { Input, input } from "@nextui-org/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Calendar = () => {
    const [inputs, setInputs] = useState({
        start: '',
        end: ''
    })

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const handleInputChange = (key, value) => {
        const reg = /^(\d{0,4})$/g
        if (reg.test(value)) {
            setInputs(prevInputs => ({
                ...prevInputs,
                [key]: value
            }))
            dispatch(history({ value: value, key: key }))
        } else {
            return;
        }
    }

    return (
        <div className="flex gap-4 items-center">
            <Input
                value={inputs.end}
                onChange={(e) => handleInputChange('end', e.target.value)}
                label='پایان'
            />
            :
            <Input
                value={inputs.start}
                onChange={(e) => handleInputChange('start', e.target.value)}
                label='شروع'
            />
        </div>
    )
}

export default Calendar