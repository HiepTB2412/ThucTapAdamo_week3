import { createSlice } from "@reduxjs/toolkit";

interface BlogState {
    postId: string
}

const initialState: BlogState = {
    postId: ''
}

export const blogReducer = createSlice({
    name: 'blog',
    initialState,
    reducers: {}
})

// eslint-disable-next-line no-empty-pattern
export const { } = blogReducer.actions