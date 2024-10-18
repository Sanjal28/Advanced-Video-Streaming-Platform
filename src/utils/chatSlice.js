import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(16,1)
      state.messages.unshift(action.payload);
    },
  },
});
// unshift is also similar to push but it pushes from bottom
// splice - Removes 1 message from an array for every 10
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
