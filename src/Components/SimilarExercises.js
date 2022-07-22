import React from "react";
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from "./Loader";

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return(
        <Box sx={{mt:{lg: '100px', xs: '20px'}}}>
            <Typography variant="h3">
                Exercises that target the same muscle group
            </Typography>
            <Stack direction='row' sx={{p: '2px', position: 'relative'}}>
                {
                    targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} />
                    : <Loader />
                }

            </Stack>

            <Typography variant="h3">
                Exercises that target the similar equipment  
            </Typography>
            <Stack direction='row' sx={{p: '2px', position: 'relative'}}>
                {
                    equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
                    : <Loader />
                }

            </Stack>
            
        </Box>
    )
};

export default SimilarExercises;