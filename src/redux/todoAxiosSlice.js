import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
 
export const fetchTitleData  = createAsyncThunk(
    'axios/fetchTitleData',
    async () => {
        // eslint-disable-next-line no-undef
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/data/dataList.json`)
        return response.data.titleData
    }
)
 
export const todoAxiosSlice = createSlice({
    name: "axios",
    initialState: {
        titleData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(
        fetchTitleData.fulfilled, (state, action) => {
            state.titleData = action.payload
        })
    }
})
 
export default todoAxiosSlice.reducer