import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import './App.css';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
    return(
        <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />}/>
            </Routes>
            <Footer />
        </Box>
    );
}
export default App;