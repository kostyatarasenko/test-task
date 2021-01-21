import axios from 'axios';

const requestComments = () => axios.get('http://localhost:3000/v1/comments')
    .then((response) => response.data)
    .catch((err) => err);

const requestSaveComment = (payload) => axios.post('http://localhost:3000/v1/comments', payload)
    .then((response) => response.data)
    .catch((err) => err);


export {
    requestComments,
    requestSaveComment,
};