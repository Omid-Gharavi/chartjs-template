import { Input } from "@nextui-org/react"
import { useState } from "react"

const Calendar = () => {
    const [inputs, setInputs] = useState({
        start: '',
        end: ''
    })

    const handleInputChange = (key, value) => {
        const reg = /^(\d{0,4})$/g
        if (reg.test(value)) {
            setInputs(prevInputs => ({
                ...prevInputs,
                [key]: value
            }))
        } else {
            return;
        }
    }

    return (
        <div className="flex gap-4 items-center">
            <Input
                value={inputs.start}
                onChange={(e) => handleInputChange('start', e.target.value)}
                label='شروع'
            />
            :
            <Input
                value={inputs.end}
                onChange={(e) => handleInputChange('end', e.target.value)}
                label='پایان'
            />
        </div>
    )
}

export default Calendar