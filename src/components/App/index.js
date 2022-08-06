import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../../assets/styles/reset.css"
import GlobalStyle from "../../globalStyles"

import DataContext from "../context/context.js"

import Header from "../Header"
import Home from "../Home"

export default function App() {
    return (
        <DataContext.Provider value="">
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}
