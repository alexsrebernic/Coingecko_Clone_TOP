import { createSlice, configureStore } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name : 'user',
    initialState: {
      uid:null,
      arrayOfFavouriteCoins: []
    },
    reducers: {
      setUid:(state,action) => {
        state.uid = action.payload
      },
      setArrayOfFavouriteCoins:(state,action) => {
        state.arrayOfFavouriteCoins = action.payload
      }
    }
  })
  export const {setUid,setArrayOfFavouriteCoins} = userSlice.actions
  export default userSlice.reducer