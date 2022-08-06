import React from 'react'
import './ShowIP.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AccessTime, CalendarMonth} from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";
import { Link } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body1"
                    },
                    style: {
                        fontSize: 16,
                    }
                },
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 12,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 16,
                    }
                }
            ]
        }
    }
})

export default function ShowIP() {
  return (
    <ThemeProvider theme={theme}>
            <Paper elevation={3} className="paper" sx={{marginY: 5}}>
                {/* <Link to="/"><button className='goBack'>Go back</button></Link> */}
                <h1>What's My IP?</h1>
                <img src=''
                className='bg-image'/>
                <Paper elevation={6} className='floatPaper'>
                    <img src=''
                    className='float-image'/>
                    <Box className='myBox'>
                        <Box>
                            <Typography variant='body1' className='boldFont'>
                                <p>Your IP adress is 78.337.6.1</p>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body3'>
                                <p className='pBold'>You are currently located in Siegen, Germany</p>
                            </Typography>
                        </Box>
                        <Box className='boxLine'>
                            <CalendarMonth  sx={{width: 17}}/>
                            <Typography variant='body2' marginLeft={0.5}>
                                Dated on the 4.08.2022
                            </Typography>
                        </Box>
                        <Box className='flexBox'>
                            <AccessTime  sx={{width: 17}}/>
                            <Typography marginLeft={0.5} variant='body2'>
                                Your local time is 15:12
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Paper>
        </ThemeProvider>
  )
}
