import { fakeData } from "@/data/fakeData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { ...fakeData }

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
        }
    }
})

export const { show, hide } = dataSlice.actions
export default dataSlice.reducer