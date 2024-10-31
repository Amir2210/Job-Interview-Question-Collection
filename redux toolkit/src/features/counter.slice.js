import { createSlice } from '@reduxjs/toolkit';

const initState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    add1: (state, actions) => {
      state.counter++
    },
    reset: (state, actions) => {
      state.counter = 0
    },
    addCustom: (state, actions) => {
      state.counter += actions.payload.value
    }
  }
})

export const { add1, reset, addCustom } = counterSlice.actions
export default counterSlice.reducer