import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getComments, saveComment } from '../../redux/actions';
import Comment from '../Comment';
import CommentInput from '../CommentInput';

const List = () => {
    const dispatch = useDispatch();

    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    const { commentsList } = useSelector((store) => store.comments);

    const mockComments = useMemo(() => commentsList.map(({ author, text, createdDate }) => (
        <Comment
            sender={author}
            message={text}
            time={createdDate}
        />
    )), [commentsList]);

    const handleChangeText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    const handleKeyPress = useCallback((e) => {
        switch (e.key) {
            case 'Enter':
                if (commentText) {
                    dispatch(saveComment({
                        author: 'Test',
                        text: commentText,
                        createDate: Date.now()
                    }));
                }
                setCommentText('');
                break;
            case 'Escape':
                setCommentText('');
                break;
        }
    }, [commentText]);

    return (
        <div className="list">
            {mockComments}
            <CommentInput
                value={commentText}
                onChange={handleChangeText}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default List;
