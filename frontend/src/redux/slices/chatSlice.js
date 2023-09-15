import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    current_user: null,
    chatting: {},
  },
  reducers: {},
})

export const {} = chatSlice.actions
export default chatSlice.reducer
