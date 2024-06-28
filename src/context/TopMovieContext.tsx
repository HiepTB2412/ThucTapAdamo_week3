import { createContext, ReactNode, useReducer } from "react";
import { topMovieReducer, TopMovieState } from "../reducer/TopMovieReducer";
import axios from "axios";
import { TopMovieActionType } from "../reducer/types"


const { GET_TOP_MOVIES } = TopMovieActionType

interface TopMovieContextProps {
    children: ReactNode
}

interface topMovieContextDefault {
    topMovies: TopMovieState
    getTopMovies: () => Promise<void>

}

const topMovieDefault: TopMovieState = []

// khoi tao gtri
export const TopMovieConText = createContext<topMovieContextDefault>({
    topMovies: topMovieDefault,
    getTopMovies: () => Promise.resolve(void 0)
})


const TopMovieConTextProvider = ({ children }: TopMovieContextProps) => {
    const [topMovies, dispatch] = useReducer(topMovieReducer, topMovieDefault)

    // get topMovie
    const getTopMovies = async () => {
        const topMovie = await axios.get("")
        dispatch({ type: GET_TOP_MOVIES, payload: [{ ...topMovie.data, Watched: false }] })
    }

    const topMovieContextData = {
        topMovies,
        getTopMovies
    }

    return (
        <TopMovieConText.Provider value={topMovieContextData}>
            {children}
        </TopMovieConText.Provider>
    )
}

export default TopMovieConTextProvider