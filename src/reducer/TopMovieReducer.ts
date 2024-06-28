import { TopMovieActionType } from "./types"

export interface TopMovie {
    imdbId: string
    Title: string
    Watched: boolean
}

export type TopMovieState = TopMovie[]

const { GET_TOP_MOVIES } = TopMovieActionType

type TopMovieAction = {
    type: typeof GET_TOP_MOVIES
    payload: TopMovie[]
}

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {
    switch (action.type) {
        case GET_TOP_MOVIES:
            return action.payload
        default:
            return state
    }
}