import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";


import {exerciseOptions, fetchData} from '../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState ({});
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            console.log({exerciseDetailData});
            setExerciseDetail(exerciseDetailData);
        };
        fetchExercisesData();
    }, [id]);

    return(
        <Box>
            <Detail exerciseDetail= {exerciseDetail}/>
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
}

export default ExerciseDetail;