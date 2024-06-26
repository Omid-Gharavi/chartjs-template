import { fakeData } from "@/data/fakeData";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

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
const newLabels = fakeData.labels
var newDataSets = []

export const fetchDatas = createAsyncThunk('chart/api', async () => {
    try {
        const res = await (await fetch('https://chartjsapi.afarineshweb.ir/wp-json/chart/v1/chart/data?start_date=1960&country=Burundi,China&indicator=GDP%20(current%20US$)')).json()
        newDataSets = res.map(value => value.values)
        console.log('Fetched Datas:', newDataSets)
        return res
    } catch (err) {
        console.error(err)
    }
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        show(state, action) {
            const { id } = action.payload;
            return {
                ...state,
                datasets: state.datasets.map((dataset) =>
                    dataset.id === id ? { ...dataset, hidden: false } : dataset
                ),
            };
        },
        hide(state, action) {
            const { id } = action.payload;
            return {
                ...state,
                datasets: state.datasets.map((dataset) =>
                    dataset.id === id ? { ...dataset, hidden: true } : dataset
                ),
            };
        },
        history(state, action) {
            const { value, key } = action.payload
            const myNum = parseInt(value)
            if (value >= 1960 && value <= 2020) {
                if (value.length === 4) {
                    if (key === 'start') {
                        if (myNum <= state.labels[state.labels.length - 1]) {
                            if (!state.labels.includes(myNum.toString())) {
                                const y = state.labels[0] - myNum
                                const firstIndex = parseInt(state.labels[0])
                                for (let i = 1; i <= y; i++) {
                                    state.labels.unshift((firstIndex - i).toString())
                                }
                            } else {
                                const y = myNum - state.labels[0]
                                state.labels = state.labels.slice(y)
                            }
                            state.datasets.map((data, index) => {
                                if (newDataSets[index] && data.data) {
                                    const missingValues = newDataSets[index].filter(value => !data.data.includes(value))
                                    console.log(missingValues)
                                    data.data.unshift(...missingValues)
                                    data.data = data.data.slice(myNum - 1960)
                                }
                            })
                        } else return
                    } else if (key === 'end') {
                        if (myNum >= state.labels[0]) {
                            if (!state.labels.includes(myNum.toString())) {
                                const z = [myNum, state.labels[state.labels.length - 1]].sort((a, b) => a - b)
                                const b = z[1]
                                const l = z[0]
                                const res = b - l
                                const newTest = parseInt(state.labels[state.labels.length - 1])
                                for (let i = 1; i <= res; i++) {
                                    state.labels.push((newTest + i).toString())
                                }
                            } else {
                                const y = state.labels[state.labels.length - 1] - myNum
                                state.labels = state.labels.slice(0, state.labels.length - (y))
                            }
                        } else return
                    }
                }
            } else return
        },
        clear(state, action) {
            return {
                ...state,
                datasets: state.datasets.map((data, index) => ({
                    ...data,
                    hidden: true,
                    data: newDataSets[index],
                })),
                labels: newLabels,
            };
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchDatas.fulfilled, (state, action) => {
            state.datasets.map((data, index) => {
                if (action.payload) {
                    data.label = action.payload[index].country
                    data.data = action.payload[index].values
                }
            })
        }).addCase(fetchDatas.rejected, () => {
            console.error('The Fetch is Rejected!')
        })
    }
})

export const { show, hide, history, clear } = dataSlice.actions
export default dataSlice.reducer