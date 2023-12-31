import {configureStore} from "@reduxjs/toolkit"
import potentialCountriesReducer from "./slices/potentialCountriesSlice"
import displayedCountryReducer from "./slices/displayCountrySlice"


export default configureStore({
    reducer: { potentialCountries: potentialCountriesReducer,displayedCountry: displayedCountryReducer}
})

