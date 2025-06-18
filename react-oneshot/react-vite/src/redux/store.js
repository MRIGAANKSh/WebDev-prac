import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterslice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//reducre will tell store what to do when there is change of state ohk  reducer ek fucntion hai jo hum bnae the hai ohk
