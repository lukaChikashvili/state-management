import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './habitSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});



export default store;
