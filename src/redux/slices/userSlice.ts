import { createSlice } from "@reduxjs/toolkit";

export interface User {
    userProfile?: {
        uid?: string;
        timestamp?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        dateOfBirth: string;
        profileImage?: string;
        gender?: string;
        country?: string;
    }
}

const initialState: User = {
  userProfile: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
        console.log('adding user object  ', action.payload)
        return action.payload;
    },
    deleteUser() {
        return initialState;
    },
    updateUserProfile(state, action){
        state.userProfile = action.payload.userProfile
        // NEVER CALL APIS here
        // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
  },
});

export const { addUser, deleteUser, updateUserProfile } = userSlice.actions
export default userSlice.reducer
