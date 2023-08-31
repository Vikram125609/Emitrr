const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        profilePicture: ''
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
        },
        changeProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        }
    }
});

export default userSlice.reducer;
export const { login, logout, changeProfilePicture } = userSlice.actions;