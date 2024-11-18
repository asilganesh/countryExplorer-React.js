import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SM_STATES_AXIOS_REQ from "../utils/sm_states";
import fetchCountriesAsync, { fetchCountriesBySearchAsync, fetchCountryByNameAsync } from "../api/fetchCountries";

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {

    const response = await fetchCountriesAsync()

    return response
})

export const fetchCountriesBySeach = createAsyncThunk('fetchCountriesBySeach', async (endPoint) => {
const {searchBy,text} = endPoint
    const response = await fetchCountriesBySearchAsync(searchBy,text)
    return response
})

export const fetchCountryByName = createAsyncThunk('fetchCountryByName', async(name) => {

    const response = await fetchCountryByNameAsync(name)
    return response
})


const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        data: [],
        countryDetails: {},
        status: SM_STATES_AXIOS_REQ.IS_IDEAL,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = SM_STATES_AXIOS_REQ.IS_TRIGGERED,
                    state.loading = true
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false
                state.status = SM_STATES_AXIOS_REQ.IS_SUCCESSFUL
                state.data = action.payload
                state.error=null

                if (!action.payload) {
                    state.status = SM_STATES_AXIOS_REQ.IS_SUCCESS_BUT_NO_DATA
                }
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false,
                    state.status = SM_STATES_AXIOS_REQ.IS_FAILED,
                    state.error = action.error
            })

            .addCase(fetchCountriesBySeach.pending, (state) => {
                state.status = SM_STATES_AXIOS_REQ.IS_TRIGGERED,
                    state.loading = true
            })
            .addCase(fetchCountriesBySeach.fulfilled, (state, action) => {
                state.loading = false
                state.status = SM_STATES_AXIOS_REQ.IS_SUCCESSFUL
                state.data = action.payload
                state.error=null

                if (!action.payload) {
                    state.status = SM_STATES_AXIOS_REQ.IS_SUCCESS_BUT_NO_DATA
                }
            })
            .addCase(fetchCountriesBySeach.rejected, (state, action) => {
                state.loading = false,
                    state.status = SM_STATES_AXIOS_REQ.IS_FAILED,
                    state.error = action.error
            })
            .addCase(fetchCountryByName.pending, (state) => {
                state.status = SM_STATES_AXIOS_REQ.IS_TRIGGERED,
                    state.loading = true
            })
            .addCase(fetchCountryByName.fulfilled, (state, action) => {
                state.loading = false
                state.status = SM_STATES_AXIOS_REQ.IS_SUCCESSFUL
                state.countryDetails = action.payload[0]
                state.error=null

                if (!action.payload) {
                    state.status = SM_STATES_AXIOS_REQ.IS_SUCCESS_BUT_NO_DATA
                }
            })
            .addCase(fetchCountryByName.rejected, (state, action) => {
                state.loading = false,
                    state.status = SM_STATES_AXIOS_REQ.IS_FAILED,
                    state.error = action.error
            })
            
    }

})

export default countriesSlice.reducer