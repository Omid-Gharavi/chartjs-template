import { Input } from "@nextui-org/react"


const Calendar = () => {
    return (
        <div className="flex gap-4 items-center">
            <Input label='شروع'></Input>
            :
            <Input label='پایان'></Input>
        </div>
    )
}

export default Calendar