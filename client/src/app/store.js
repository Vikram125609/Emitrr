import testSlice from "../features/test/testSlice";
import userSlice from "../features/user/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        user: userSlice,
        test: testSlice,
    }
});

export default store;