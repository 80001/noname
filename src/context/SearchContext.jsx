import { createContext, useState } from "react";

export const SearchContext = createContext({
    search: '',
    setSearch: () => { },
    history: [],
    setHistory: () => { },
    showComments: true,
    setShowComments: () => { },
    writeComments: false,
    setWriteComments: () => { },
    orientation: '',
    setOrientation: () => { },
    page: 1,
    setPage: () => { },
    isLoading: false,
    setIsLoading: () => { },
})

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [history, setHistory] = useState([])
    const [showComments, setShowComments] = useState(true)
    const [writeComments, setWriteComments] = useState(false)
    const [orientation, setOrientation] = useState("landscape")
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)


    const value = {
        setSearch,
        setHistory,
        search,
        history,
        showComments,
        setShowComments,
        orientation,
        setOrientation,
        page,
        setPage,
        isLoading,
        setIsLoading,
        writeComments,
        setWriteComments
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}