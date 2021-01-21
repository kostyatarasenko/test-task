import { createAction } from '@reduxjs/toolkit';

import {
    GET_COMMENTS,
    SAVE_COMMENT,
} from './types';

const getComments = createAction(GET_COMMENTS);
const saveComment = createAction(SAVE_COMMENT);

export {
    getComments,
    saveComment,
};