import React from 'react';
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersData = usersResponse.data
        
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        const postsData = postsResponse.data


        const data = usersData.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            about: user.company.catchPhrase,
            chat: [],
            posts: postsData.filter(post => post.albumId === user.id).map(el => ({
                id: el.id,
                username: el.title.slice(0, el.title.indexOf(' ')),
                disc: el.title.slice(el.title.indexOf(' ') + 1),
                img: el.url,
                likedNumber: Math.floor(Math.random() * 100000),
                comments: [],
            })),
        }))
        console.log(data);
        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        initialUser: {},
    },
    reducers: {
        setInitialUser(state, { payload }) {
            console.log(state.data);
            if(state.data.some(el => (el.username === payload.log || el.email === payload.log) && (el.password === payload.pass))) {
                return {
                    ...state,
                    initialUser: state.data.find(el => (el.username === payload.log || el.email === payload.log) && (el.password === payload.pass))
                }
            }
            return state
        },
        delInitialUser(state, { payload }) {
            return {
                ...state,
                initialUser: {},
            }
        },
        sendMessage(state, { payload }) {
            let currentAnswer = ''
            switch (payload.toLowerCase()) {
                case 'barev':
                    currentAnswer = 'barev';
                    break;
                case 'vonces' :
                    currentAnswer = 'lav du';
                    break;
                case 'anunt vonca' : 
                    currentAnswer = 'Mino Bot, isk qonny?';
                    break;
                case 'ov es du' : 
                    currentAnswer = React.createElement('img',{alt: ' ',src: 'https://www.ferra.ru/imgs/2022/09/12/14/5581491/b0e04d78b836ee631b3910905999c43eece34c22.png'});
                    break;
                case 'qani tarekan es' : 
                    currentAnswer = 'der 1 orekan :)';
                    break;
                case 'vortex es aprum' : 
                    currentAnswer = React.createElement('img',{alt: ' ',src: 'https://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2020/06/Astronaut_working_on_Mars.jpg?mw=600'})
                    break;
                case 'axjik es te txa' :
                    currentAnswer = 'xeloq pahi qez!!!';
                    break;
                default:
                    currentAnswer = 'es qez chhaskaca krknir noric';
                    break;
            }
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    chat: [
                        ...state.initialUser.chat,
                        {
                            id: 'me' + new Date().getTime(),
                            user: 'me',
                            txt: payload,
                        },
                        {
                            id: 'bot' + new Date().getTime(),
                            user: 'bot',
                            txt: currentAnswer,
                        }
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                chat: [
                                    ...state.initialUser.chat,
                                    {
                                        id: 'me' + new Date().getTime(),
                                        user: 'me',
                                        txt: payload,
                                    },
                                    {
                                        id: 'bot' + new Date().getTime(),
                                        user: 'bot',
                                        txt: currentAnswer,
                                    },
                                ]
                            }
                        }
                        return el
                    })
                ]
            }
        },
        deleteMessage(state, { payload }) {
            let index = state.initialUser.chat.findIndex(el => el.id === payload.id)
            let secId = state.initialUser.chat[index + 1].id
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    chat: [
                        ...state.initialUser.chat.filter(message => message.id !== payload.id).filter(message => message.id !== secId)
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                chat: [
                                    ...state.initialUser.chat.filter(message => message.id !== payload.id).filter(message => message.id !== secId)
                                ]
                            }
                        }
                        return el
                    })
                ]
            } 
        },
        deleteAllMessage(state, { payload }) {
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    chat: []
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                chat: []
                            }
                        }
                        return el
                    })
                ]
            } 
        },
        addNewPostInProfile(state, { payload }) {
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    posts: [
                        payload,
                        ...state.initialUser.posts
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                posts: [
                                    payload,
                                    ...state.initialUser.posts
                                ]
                            }
                        }
                        return el
                    })
                ]
            }
        },
        delPostInProfile(state, { payload }) {
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    posts: [
                        ...state.initialUser.posts.filter(post => post.id !== payload)
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                posts: [
                                    ...state.initialUser.posts.filter(post => post.id !== payload)
                                ]
                            }
                        }
                        return el
                    })
                ]
            }
        }
    }, 
    extraReducers: {
        [fetchUsers.fulfilled] : (state, { payload }) => {
            return{
                ...state,
                data: payload,
            }
        }
    }
})

export const selectUsers = state => state.users

export const { setInitialUser, delInitialUser, sendMessage, deleteMessage, deleteAllMessage, addNewPostInProfile, delPostInProfile } = usersSlice.actions

export const usersReducers = usersSlice.reducer