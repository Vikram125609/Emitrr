const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        language: ''
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export default userSlice.reducer;
export const { setLanguage } = userSlice.actions;