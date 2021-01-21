import { all } from 'redux-saga/effects';

import commentsSaga from './commentsSaga';

export default function* rootSaga() {
    yield all([
        ...commentsSaga,
    ]);
}