import { createSlice } from '@reduxjs/toolkit'
//slice ko import krliya 

//intital btao vo kya hoga 
const initialState = {
  value: 0,
}


//isko export kro functuon ho 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  //reducer func bnao kya ho skte hai mtlb iss state ko change kr skte hai vo function ui se aa rhe hai stte pe vo ye hoonge jo reducer ko btana hai

  reducers: {
    //inc stete+1
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    //dec -1

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    mul:(state)=>{
      state.value*=2;
    }
  },
})

// Action creators are generated for each case reducer function
//ye func ho skte hai count ke liye 
export const { increment, decrement, incrementByAmount,mul } = counterSlice.actions


//reducer ko export krdiya 
export default counterSlice.reducer


//every feature is slice in redux lang so evry feature is slice in redux toolkit
