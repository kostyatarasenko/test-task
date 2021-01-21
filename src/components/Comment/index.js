import React from 'react';

const Comment = ({ message, time, sender }) => {
    const today = new Date();

    const localisatedTime = `${today.getHours() + "." + today.getMinutes() + '.'} ${today.getDate()+':'+(today.getMonth()+1)+' '+ today.getFullYear()}`;
    return (
        <div className="comment">
            <div className="mainMessage">{message}</div>
            <div className="timeAndSend">
                <div className="time">{localisatedTime}</div>
                <div className="sender">{sender}</div>
            </div>
        </div>
    )
};

export default Comment;