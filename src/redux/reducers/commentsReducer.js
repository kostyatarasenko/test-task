import { createReducer } from '@reduxjs/toolkit';

import {
    GET_COMMENTS_FULFILLED,
    GET_COMMENTS_REJECTED,
    SAVE_COMMENT_FULFILLED,
    SAVE_COMMENT_REJECTED,
} from '../actions/types';

const commentsReducer = createReducer({
    commentsList: [],
    errors: null,
}, {
    [GET_COMMENTS_FULFILLED]: (state, { payload }) => ({
        ...state,
        commentsList: payload,
        errors: null,
    }),
    [GET_COMMENTS_REJECTED]: (state, { payload }) => ({
        ...state,
        errors: payload,
    }),
    [SAVE_COMMENT_FULFILLED]: (state, { payload }) => ({
        ...state,
        commentsList: payload,
        errors: null,
    }),
    [SAVE_COMMENT_REJECTED]: (state, { payload }) => ({
        ...state,
        errors: payload,
    }),
});

export default commentsReducer;