import React from 'react'
import './ShowIP.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AccessTime, CalendarMonth} from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { MyMap } from './MyMap';
import logo from './germany-flag.svg';

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
    const [data, setData] = useState(false)
    const [errMessage, setErrMessage] = useState("Data not responding😒")

    const ipData = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_API_KEY}`

    useEffect(()=>{
        const userIP = async () =>{
            try{
                const response = await fetch(ipData)
                const userIPData = await response.json()
                // console.log(userIPData)
                setData(userIPData)
            } catch (err){
                // console.log(err)
                setErrMessage(errMessage)
            }
        }
        userIP()
    }, [])
    
        let today = new Date(),
        currentTime = today.toLocaleTimeString();

        let todayDate = new Date(),
        date = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
     
    if(!data){
        return <div className='loading'>Loading...</div>
    }
  return (
        <div>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} className="paper" sx={{marginY: 2}}>
                    <Link to="/"><button className='goBack'>Go back</button></Link>
                    <h1>What's My IP?</h1>
                    <div className='map'>
                        <MyMap lat={data.location.lat} lng={data.location.lng}/>
                    </div>
                    <Paper elevation={6} className='floatPaper'>
                        <Box className='myBox'>
                            <div className='flagFlex'>
                                <img src={logo} className='float-image'/>
                                <div className='rightFlex'>
                                    <Box>
                                        <Box>
                                            <Typography variant='body1' className='boldFont'>
                                                <p>Your IP adress is {data.ip}</p>
                                            </Typography>
                                        </Box>
                                        <div className='location'>
                                            <Typography variant='body3'>
                                                <p className='pBold'>You are currently located in {data.location.region}, {data.location.country}</p>
                                            </Typography>
                                        </div>
                                        <div className='latLng'>
                                            <Typography variant='body2' marginLeft={0.5}>
                                                Longitude: {data.location.lng}
                                            </Typography>
                                            <Typography variant='body2' marginLeft={0.5}>
                                                Latitude: {data.location.lat}
                                            </Typography>
                                            <Typography variant='body2' marginLeft={0.5}>
                                                {currentTime}
                                            </Typography>
                                        </div>
                                    </Box>
                                </div>
                            </div>
                            <Box className='boxLine'>
                                <CalendarMonth  sx={{width: 17}}/>
                                <Typography variant='body2' marginLeft={0.5}>
                                    {date}
                                </Typography>
                            </Box>
                            <Box className='flexBox'>
                                <AccessTime  sx={{width: 17}}/>
                                <Typography marginLeft={0.5} variant='body2'>
                                    Your local time is {data.location.timezone}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Paper>
            </ThemeProvider>
            {/* <Outlet /> */}
        </div>
  )
}
