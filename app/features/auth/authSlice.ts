import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: true,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
