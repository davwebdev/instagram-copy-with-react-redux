import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const dataPosts = responsePosts.data;
        
        const responseComments = await axios.get('https://jsonplaceholder.typicode.com/comments')
        const dataComments = responseComments.data;

        const data = dataPosts.map(el => ({
            id: el.id,
            username: el.title.slice(0, el.title.indexOf(' ')),
            disc: el.title.slice(el.title.indexOf(' ') + 1),
            img: el.url,
            likedNumber: Math.floor(Math.random() * 100000),
            comments: dataComments.filter(comments => comments.postId === el.id).map(comment => ({
                id: comment.id,
                body: comment.body,
                username: comment.name.slice(0, comment.name.indexOf(' ')),
            })),
        }))
        return data
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
    },
    reducers: {
        sendComment(state, {payload}) {
            return{
                ...state,
                data: state.data.map(post => {
                    if (post.id === payload.id) {
                        return{
                            ...post,
                            comments: [...post.comments,{
                                id: new Date().getTime().toString(),
                                body: payload.text,
                                username: payload.user,
                            }],
                        }
                    }
                    return post
                })
            }
        },
        addNewPost(state, { payload }) {
            return {
                data: [
                    payload,
                    ...state.data,
                ],
            }
        },
        delPost(state, { payload }) {
            return {
                data: [
                    ...state.data.filter(post => post.id !== payload)
                ]
            }
        }
    },
    extraReducers: {
        [fetchPosts.pending] : (state, {payload}) => {
            console.log('Loading...');
        },
        [fetchPosts.fulfilled] : (state, {payload}) => {
            return {
                ...state,
                data: [...payload],
            }
        },
        [fetchPosts.rejected] : (state, {payload}) => {
            console.log('mi ban en chi');
        }
    }
})

export const selectPosts = state => state.posts 

export const { sendComment, addNewPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer 