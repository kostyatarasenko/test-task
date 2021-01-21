import React, { useEffect } from 'react';

const CommentInput = ({ value, onKeyPress, onChange }) => {
    return (
        <div className="newCommentWrap">
            <input
                value={value}
                onKeyPress={onKeyPress}
                onChange={onChange}
                className="newComment"
                type="text"
                placeholder="Type your comment..."
            />
        </div>
    );
};

export default CommentInput;
