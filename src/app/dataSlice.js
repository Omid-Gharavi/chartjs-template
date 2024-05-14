import { fakeData } from "@/data/fakeData";
import { createSlice } from "@reduxjs/toolkit";

const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj

    const clone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        const value = obj[key]
        clone[key] = deepCopy(value)
    }
    return clone
}

const initialState = deepCopy(fakeData)
const newDataSets = fakeData.datasets.map(data => data.data)

export const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        show(state, action) {
            const { id } = action.payload
            const filteredAction = state.datasets.find(data => data.id === id)
            filteredAction.hidden = false
        },
        hide(state, action) {
            const { id } = action.payload
            const filteredAction = state.datasets.find(data => data.id === id)
            filteredAction.hidden = true
        },
        history(state, action) {
            const { value, key } = action.payload
            const myNum = parseInt(value)
            if (value >= 1960 && value <= 2020) {
                if (value.length === 4) {
                    if (key === 'start') {
                        state.labels = state.labels.slice(-1)
                        const x = [state.labels[0], myNum].sort((a, b) => a - b)
                        const biggest = x[1]
                        const lowest = x[0]
                        const y = biggest - lowest
                        for (let i = 1; i <= y; i++) {
                            state.labels.unshift((state.labels[state.labels.length - 1] - i))
                        }
                        state.datasets.map((data, index) => {
                            console.log(data.data.length)
                            data.data = data.data.slice(myNum - 1960);
                        });
                    } else if (key === 'end') {
                        state.labels = state.labels.slice(0, 1)
                        const x = [state.labels[0], myNum].sort((a, b) => a - b)
                        const biggest = x[1]
                        const lowest = x[0]
                        const y = biggest - lowest
                        for (let i = 1; i <= y; i++) {
                            state.labels.push((i + state.labels[0]))
                        }
                    }
                }
            } else return
        }
    }
})

export const { show, hide, history } = dataSlice.actions
export default dataSlice.reducer