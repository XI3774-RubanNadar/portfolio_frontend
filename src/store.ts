import React from 'react'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk,{ThunkMiddleware} from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {RootReducer} from './Reducer/index'
import homeSlice from './Reducer/HomeSlice'
type Props = {}

const combineReducer = combineReducers(RootReducer)
//const store = createStore(combineReducer,applyMiddleware(thunk))

 const store = configureStore({
 reducer:homeSlice
 })
 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store