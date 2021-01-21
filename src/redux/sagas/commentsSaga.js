import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';

import {
    GET_COMMENTS,
    GET_COMMENTS_FULFILLED,
    GET_COMMENTS_REJECTED,
    SAVE_COMMENT,
    SAVE_COMMENT_REJECTED,
} from '../actions/types';

import { requestComments, requestSaveComment } from '../api';

function* getComments() {
    try {
        const comments = yield call(requestComments)
        yield put({
            type: GET_COMMENTS_FULFILLED,
            payload: comments,
        });
    } catch (error) {
        yield put({
            type: GET_COMMENTS_REJECTED,
            payload: error,
        });
    }
}

function* saveComment({ payload }) {
    try {
        const comments = yield call(requestSaveComment, payload);
        if (comments) {
            yield call(getComments);
        }
    } catch (error) {
        yield put({
            type: SAVE_COMMENT_REJECTED,
            payload: error,
        });
    }
}

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* watchSaveComment() {
    yield takeEvery(SAVE_COMMENT, saveComment);
}

export default [
    watchGetComments(),
    watchSaveComment(),
]