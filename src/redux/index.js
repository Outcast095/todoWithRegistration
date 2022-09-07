import { configureStore, combineReducers } from "@reduxjs/toolkit/";
import authorizationReducer from "./authorizationReducer"
import { usersApi } from "./users"

const rootReducer = combineReducers({
    authorizationReducer,
    [usersApi.reducerPath]: usersApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(usersApi.middleware)
    })
}




