import {
    combineReducers,
    createAction,
    createSelector,
    createSlice,
    PayloadAction
    } from '@reduxjs/toolkit';
    
export interface loginCheck{
    isLogin : boolean;
}

const initialState : loginCheck = {
    isLogin : false
};

const reducers = {
    add: ({ isLogin }: loginCheck, { payload: {} }
        : PayloadAction<loginCheck>) => {}
       
}

const rootReducer = combineReducers({

});

export default rootReducer;